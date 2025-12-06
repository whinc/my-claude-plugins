# Advanced Hooks Reference

This document provides comprehensive documentation for advanced utility hooks in ahooks, with detailed examples, integration patterns, and real-world applications.

## Table of Contents

- [useWebSocket](#usewebsocket)
- [useHistoryTravel](#usehistorytravel)
- [useReactive](#usereactive)
- [useEventEmitter](#useeventemitter)
- [useEventTarget](#useeventtarget)
- [useExternal](#useexternal)
- [useLockFn](#uselockfn)
- [useLongPress](#uselongpress)
- [useDrag & useDrop](#usedrag--usedrop)
- [useUpdate](#useupdate)
- [useUnmountedRef](#useunmountedref)
- [useRafInterval](#userafinterval)
- [useCountDown](#usecountdown)

---

## useWebSocket

### Description
A Hook for handling WebSocket connections with automatic reconnection, state management, and message handling capabilities.

### TypeScript Type Definitions

```typescript
enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

interface Options {
  reconnectLimit?: number;
  reconnectInterval?: number;
  manual?: boolean;
  onOpen?: (event: WebSocketEventMap['open'], instance: WebSocket) => void;
  onClose?: (event: WebSocketEventMap['close'], instance: WebSocket) => void;
  onMessage?: (message: WebSocketEventMap['message'], instance: WebSocket) => void;
  onError?: (event: WebSocketEventMap['error'], instance: WebSocket) => void;
  protocols?: string | string[];
}

interface Result {
  latestMessage?: WebSocketEventMap['message'];
  sendMessage: WebSocket['send'];
  disconnect: () => void;
  connect: () => void;
  readyState: ReadyState;
  webSocketIns?: WebSocket;
}

function useWebSocket(socketUrl: string, options?: Options): Result;
```

### Advanced Examples and Use Cases

#### 1. Real-time Chat Application

```typescript
function ChatComponent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const {
    latestMessage,
    sendMessage,
    readyState,
    connect,
    disconnect
  } = useWebSocket('wss://api.example.com/chat', {
    onOpen: () => console.log('WebSocket connected'),
    onClose: () => console.log('WebSocket disconnected'),
    onMessage: (message) => {
      const data = JSON.parse(message.data);
      setMessages(prev => [...prev, data]);
    },
    onError: (error) => console.error('WebSocket error:', error),
    reconnectLimit: 5,
    reconnectInterval: 3000,
  });

  const handleSendMessage = () => {
    if (inputValue.trim() && readyState === ReadyState.Open) {
      sendMessage(JSON.stringify({
        type: 'message',
        content: inputValue,
        timestamp: Date.now()
      }));
      setInputValue('');
    }
  };

  return (
    <div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg.content}</div>
        ))}
      </div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <button onClick={handleSendMessage} disabled={readyState !== ReadyState.Open}>
        Send
      </button>
    </div>
  );
}
```

#### 2. Live Stock Price Ticker

```typescript
function StockTicker() {
  const [stocks, setStocks] = useState<Record<string, number>>({});

  useWebSocket('wss://marketdata.example.com/stocks', {
    onMessage: (message) => {
      const data = JSON.parse(message.data);
      setStocks(prev => ({
        ...prev,
        [data.symbol]: data.price
      }));
    },
    reconnectInterval: 1000,
  });

  return (
    <div>
      <h3>Live Stock Prices</h3>
      {Object.entries(stocks).map(([symbol, price]) => (
        <div key={symbol}>
          {symbol}: ${price.toFixed(2)}
        </div>
      ))}
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useLocalStorage for offline message queue
function OfflineChat() {
  const [offlineQueue, setOfflineQueue] = useLocalStorage<Message[]>('offlineQueue', []);
  const { readyState, sendMessage } = useWebSocket('wss://api.example.com/chat', {
    onOpen: () => {
      // Send queued messages when connection is restored
      offlineQueue.forEach(msg => {
        sendMessage(JSON.stringify(msg));
      });
      setOfflineQueue([]);
    }
  });

  const sendMessageWithOfflineSupport = useCallback((msg: Message) => {
    if (readyState === ReadyState.Open) {
      sendMessage(JSON.stringify(msg));
    } else {
      setOfflineQueue(prev => [...prev, msg]);
    }
  }, [readyState, sendMessage, setOfflineQueue]);

  return <ChatInterface onSend={sendMessageWithOfflineSupport} />;
}
```

### Performance Considerations

1. **Memory Management**: Always implement proper cleanup in onOpen/onClose handlers
  
2. **Reconnection Strategy**: Implement exponential backoff for reconnection intervals
  
3. **Message Buffering**: Consider implementing message queuing for offline scenarios
   
---

## useHistoryTravel

### Description
A Hook for managing state history with undo/redo functionality, allowing navigation through previous states.

### TypeScript Type Definitions

```typescript
interface HistoryTravelResult<T> {
  value: T;
  setValue: (value: T) => void;
  backLength: number;
  forwardLength: number;
  go: (step: number) => void;
  back: () => void;
  forward: () => void;
  reset: (newInitialValue?: T) => void;
}

function useHistoryTravel<T>(initialValue?: T, maxLength?: number): HistoryTravelResult<T>;
```

### Advanced Examples and Use Cases

#### 1. Text Editor with Undo/Redo

```typescript
function TextEditor() {
  const [content, setContent] = useState('');
  const history = useHistoryTravel(content, 50);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    history.setValue(newContent);
  };

  const handleUndo = () => {
    history.back();
    setContent(history.value);
  };

  const handleRedo = () => {
    history.forward();
    setContent(history.value);
  };

  return (
    <div>
      <div className="toolbar">
        <button onClick={handleUndo} disabled={history.backLength === 0}>
          Undo (Ctrl+Z)
        </button>
        <button onClick={handleRedo} disabled={history.forwardLength === 0}>
          Redo (Ctrl+Y)
        </button>
        <span>History: {history.backLength} back, {history.forwardLength} forward</span>
      </div>
      <textarea
        value={content}
        onChange={handleTextChange}
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key === 'z') {
            e.preventDefault();
            handleUndo();
          } else if (e.ctrlKey && e.key === 'y') {
            e.preventDefault();
            handleRedo();
          }
        }}
      />
    </div>
  );
}
```

#### 2. Drawing Canvas with History

```typescript
function DrawingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const history = useHistoryTravel<ImageData>(undefined, 100);

  const saveCanvasState = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        history.setValue(imageData);
      }
    }
  }, [history]);

  const restoreCanvasState = useCallback((imageData: ImageData) => {
    const canvas = canvasRef.current;
    if (canvas && imageData) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.putImageData(imageData, 0, 0);
      }
    }
  }, []);

  const handleUndo = () => {
    history.back();
    if (history.value) {
      restoreCanvasState(history.value);
    }
  };

  const handleRedo = () => {
    history.forward();
    if (history.value) {
      restoreCanvasState(history.value);
    }
  };

  return (
    <div>
      <div className="toolbar">
        <button onClick={handleUndo} disabled={history.backLength === 0}>Undo</button>
        <button onClick={handleRedo} disabled={history.forwardLength === 0}>Redo</button>
      </div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={() => {
          setIsDrawing(true);
          saveCanvasState();
        }}
        onMouseUp={() => setIsDrawing(false)}
      />
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useLocalStorage for persistent history
function PersistentEditor() {
  const [savedContent, setSavedContent] = useLocalStorage('editorContent', '');
  const history = useHistoryTravel(savedContent);

  useEffect(() => {
    if (savedContent !== history.value) {
      history.setValue(savedContent);
    }
  }, [savedContent, history]);

  const saveToStorage = useCallback(() => {
    setSavedContent(history.value);
  }, [history.value, setSavedContent]);

  return (
    <Editor
      content={history.value}
      onChange={history.setValue}
      onSave={saveToStorage}
      onUndo={() => {
        history.back();
        setSavedContent(history.value);
      }}
      onRedo={() => {
        history.forward();
        setSavedContent(history.value);
      }}
    />
  );
}
```

---

## useReactive

### Description
A Hook that provides reactive data management experience, allowing direct property modifications to trigger re-renders without explicit setState calls.

### TypeScript Type Definitions

```typescript
function useReactive<T extends Record<string, any>>(initialState: T): T;
```

### Advanced Examples and Use Cases

#### 1. Complex Form Management

```typescript
function UserForm() {
  const formData = useReactive({
    user: {
      personal: {
        firstName: '',
        lastName: '',
        email: '',
      },
      address: {
        street: '',
        city: '',
        country: '',
      },
    },
    preferences: {
      newsletter: false,
      notifications: true,
    },
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const updateField = (path: string, value: any) => {
    const keys = path.split('.');
    let current: any = formData;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        value={formData.user.personal.firstName}
        onChange={(e) => updateField('user.personal.firstName', e.target.value)}
      />
      <input
        placeholder="Last Name"
        value={formData.user.personal.lastName}
        onChange={(e) => updateField('user.personal.lastName', e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.user.personal.email}
        onChange={(e) => updateField('user.personal.email', e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={formData.preferences.newsletter}
          onChange={(e) => (formData.preferences.newsletter = e.target.checked)}
        />
        Subscribe to newsletter
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

#### 2. Real-time Dashboard Data

```typescript
function Dashboard() {
  const dashboard = useReactive({
    stats: {
      users: 0,
      revenue: 0,
      orders: 0,
    },
    charts: {
      traffic: [],
      sales: [],
    },
    loading: true,
    lastUpdated: null as Date | null,
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const data = await fetchDashboardData();

        // Directly update reactive properties
        dashboard.stats.users = data.users;
        dashboard.stats.revenue = data.revenue;
        dashboard.stats.orders = data.orders;
        dashboard.charts.traffic = data.traffic;
        dashboard.charts.sales = data.sales;
        dashboard.loading = false;
        dashboard.lastUpdated = new Date();
      } catch (error) {
        dashboard.loading = false;
        console.error('Failed to fetch dashboard data:', error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [dashboard]);

  return (
    <div>
      <div className="stats">
        <div className="stat-card">
          <h3>Users</h3>
          <p>{dashboard.stats.users.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p>${dashboard.stats.revenue.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Orders</h3>
          <p>{dashboard.stats.orders.toLocaleString()}</p>
        </div>
      </div>
      <div className="last-updated">
        Last updated: {dashboard.lastUpdated?.toLocaleString()}
      </div>
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useDebounce for reactive search
function SearchComponent() {
  const searchState = useReactive({
    query: '',
    results: [],
    loading: false,
    filters: {
      category: 'all',
      priceRange: [0, 1000],
    },
  });

  const debouncedQuery = useDebounce(searchState.query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      searchState.loading = true;
      searchResults(debouncedQuery, searchState.filters)
        .then(results => {
          searchState.results = results;
        })
        .finally(() => {
          searchState.loading = false;
        });
    } else {
      searchState.results = [];
    }
  }, [debouncedQuery, searchState]);

  return (
    <div>
      <input
        value={searchState.query}
        onChange={(e) => (searchState.query = e.target.value)}
        placeholder="Search..."
      />
      {searchState.loading && <div>Loading...</div>}
      <ResultsList results={searchState.results} />
    </div>
  );
}
```

### Performance Considerations

1. **Deep Reactivity**: useReactive creates deep reactive objects, which can impact performance with very large objects
   
2. **Compatibility**: Currently doesn't support Map, Set, and other non-plain objects
   
---

## useEventEmitter

### Description
A Hook that provides EventEmitter functionality for component communication, allowing event-driven architecture between components.

### TypeScript Type Definitions

```typescript
interface EventEmitter<T = any> {
  emit: (val: T) => void;
  useSubscription: (callback: (val: T) => void) => void;
}

function useEventEmitter<T = any>(): EventEmitter<T>;
```

### Advanced Examples and Use Cases

#### 1. Cross-Component Notification System

```typescript
// Create a global event emitter context
const NotificationContext = createContext<useEventEmitter<any> | null>(null);

function NotificationProvider({ children }: { children: React.ReactNode }) {
  const notificationEmitter = useEventEmitter<{
    type: 'success' | 'error' | 'info';
    message: string;
    duration?: number;
  }>();

  return (
    <NotificationContext.Provider value={notificationEmitter}>
      {children}
      <NotificationListener emitter={notificationEmitter} />
    </NotificationContext.Provider>
  );
}

function NotificationListener({ emitter }: { emitter: any }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  emitter.useSubscription((notification) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { ...notification, id }]);

    if (notification.duration !== 0) {
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, notification.duration || 3000);
    }
  });

  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <div key={notification.id} className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      ))}
    </div>
  );
}

// Usage in any component
function SomeComponent() {
  const emitter = useContext(NotificationContext);

  const showSuccess = () => {
    emitter?.emit({
      type: 'success',
      message: 'Operation completed successfully!'
    });
  };

  return <button onClick={showSuccess}>Show Success</button>;
}
```

#### 2. Real-time Collaboration

```typescript
function CollaborationEditor() {
  const changeEmitter = useEventEmitter<{
    type: 'insert' | 'delete' | 'format';
    position: number;
    content?: string;
    userId: string;
  }>();

  const [content, setContent] = useState('');
  const [users, setUsers] = useState<string[]>([]);

  // Listen for remote changes
  changeEmitter.useSubscription((change) => {
    if (change.userId !== 'current-user') {
      setContent(prev => {
        switch (change.type) {
          case 'insert':
            return prev.slice(0, change.position) +
                   (change.content || '') +
                   prev.slice(change.position);
          case 'delete':
            return prev.slice(0, change.position) +
                   prev.slice(change.position + 1);
          default:
            return prev;
        }
      });
    }
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    const position = e.target.selectionStart || 0;

    // Detect change type and emit
    if (newContent.length > content.length) {
      const insertedText = newContent.slice(position, position + (newContent.length - content.length));
      changeEmitter.emit({
        type: 'insert',
        position,
        content: insertedText,
        userId: 'current-user'
      });
    }

    setContent(newContent);
  };

  return (
    <div>
      <div className="users">
        Active users: {users.join(', ')}
      </div>
      <textarea
        value={content}
        onChange={handleTextChange}
      />
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useContext for global event bus
function createEventBus<T>() {
  const context = createContext<useEventEmitter<T> | null>(null);

  return {
    Provider: ({ children }: { children: React.ReactNode }) => {
      const emitter = useEventEmitter<T>();
      return (
        <context.Provider value={emitter}>
          {children}
        </context.Provider>
      );
    },
    useEventBus: () => useContext(context)
  };
}

// Usage
const { Provider: TodoEventProvider, useEventBus } = createEventBus<{
  type: 'add' | 'toggle' | 'delete';
  todo: Todo;
}>();

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const emitter = useEventBus();

  emitter.useSubscription((event) => {
    setTodos(prev => {
      switch (event.type) {
        case 'add':
          return [...prev, event.todo];
        case 'toggle':
          return prev.map(todo =>
            todo.id === event.todo.id
              ? { ...todo, completed: !todo.completed }
              : todo
          );
        case 'delete':
          return prev.filter(todo => todo.id !== event.todo.id);
        default:
          return prev;
      }
    });
  });

  return (
    <div>
      <TodoList todos={todos} />
      <AddTodoForm />
    </div>
  );
}
```

---

## useEventTarget

### Description
A Hook that simplifies form control handling by managing onChange and value logic for common form controls with support for custom value transformation.

### TypeScript Type Definitions

```typescript
interface EventTargetOptions<T, U> {
  initialValue?: T;
  transformer?: (value: U) => T;
}

interface EventTargetResult<T> {
  value: T;
  onChange: (e: { target: { value: T } }) => void;
  reset: () => void;
}

function useEventTarget<T, U = T>(options?: EventTargetOptions<T, U>): EventTargetResult<T>;
```

### Advanced Examples and Use Cases

#### 1. Number Input with Validation

```typescript
function NumberInput() {
  const { value, onChange, reset } = useEventTarget<number, string>({
    initialValue: 0,
    transformer: (val: string) => {
      const num = parseFloat(val);
      return isNaN(num) ? 0 : Math.max(0, Math.min(100, num)); // Clamp between 0 and 100
    },
  });

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={onChange}
        min="0"
        max="100"
      />
      <p>Value: {value}%</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

#### 2. Tag Input Component

```typescript
function TagInput() {
  const [tags, setTags] = useState<string[]>([]);
  const { value, onChange, reset } = useEventTarget<string, string>({
    initialValue: '',
    transformer: (val: string) => val.trim(),
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      e.preventDefault();
      setTags(prev => [...prev, value.trim()]);
      reset();
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
            <button onClick={() => removeTag(index)}>×</button>
          </span>
        ))}
      </div>
      <input
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter to add tags"
      />
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useDebounce for search inputs
function DebouncedSearch() {
  const [results, setResults] = useState([]);
  const { value, onChange, reset } = useEventTarget('');
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedValue) {
      searchAPI(debouncedValue).then(setResults);
    } else {
      setResults([]);
    }
  }, [debouncedValue]);

  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
      <button onClick={reset}>Clear</button>
      <SearchResults results={results} />
    </div>
  );
}
```

---

## useExternal

### Description
A Hook for dynamically injecting external JavaScript or CSS resources, ensuring global uniqueness and managing loading states.

### TypeScript Type Definitions

```typescript
type ExternalStatus = 'unset' | 'loading' | 'ready' | 'error';

interface ExternalOptions {
  type?: 'js' | 'css';
  js?: Partial<HTMLScriptElement>;
  css?: Partial<HTMLStyleElement>;
  keepWhenUnused?: boolean;
}

function useExternal(path: string, options?: ExternalOptions): ExternalStatus;
```

### Advanced Examples and Use Cases

#### 1. Dynamic Theme Loading

```typescript
function ThemeSelector() {
  const [theme, setTheme] = useState('light');
  const lightThemeStatus = useExternal('/themes/light.css', {
    type: 'css',
    keepWhenUnused: true
  });
  const darkThemeStatus = useExternal('/themes/dark.css', {
    type: 'css',
    keepWhenUnused: true
  });

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div>
      <select
        value={theme}
        onChange={(e) => handleThemeChange(e.target.value)}
      >
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
      {(lightThemeStatus === 'loading' || darkThemeStatus === 'loading') && (
        <div>Loading theme...</div>
      )}
    </div>
  );
}
```

#### 2. External Library Loading

```typescript
function ChartComponent() {
  const [chartData, setChartData] = useState(null);
  const chartLibStatus = useExternal('https://cdn.jsdelivr.net/npm/chart.js', {
    type: 'js',
    js: { async: true }
  });

  useEffect(() => {
    if (chartLibStatus === 'ready' && (window as any).Chart && chartData) {
      const ctx = document.getElementById('chart') as HTMLCanvasElement;
      new (window as any).Chart(ctx, {
        type: 'bar',
        data: chartData
      });
    }
  }, [chartLibStatus, chartData]);

  if (chartLibStatus === 'loading') return <div>Loading chart library...</div>;
  if (chartLibStatus === 'error') return <div>Failed to load chart library</div>;

  return <canvas id="chart"></canvas>;
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useRequest for conditional loading
function ExternalDataComponent() {
  const [loadExternal, setLoadExternal] = useState(false);
  const { data, loading, error } = useRequest(
    () => fetch('https://api.example.com/data').then(r => r.json()),
    {
      manual: true,
      ready: loadExternal
    }
  );

  const externalStatus = useExternal(
    loadExternal ? 'https://external-library.com/lib.js' : '',
    { type: 'js' }
  );

  const handleLoadData = () => {
    setLoadExternal(true);
  };

  useEffect(() => {
    if (externalStatus === 'ready' && loadExternal) {
      // Now the external library is ready, we can use it
      data && processDataWithExternalLibrary(data);
    }
  }, [externalStatus, loadExternal, data]);

  return (
    <div>
      <button onClick={handleLoadData}>Load External Data</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}
```

---

## useLockFn

### Description
A Hook that adds a race condition lock to asynchronous functions, preventing concurrent execution of the same function.

### TypeScript Type Definitions

```typescript
function useLockFn<P extends any[] = any[], V = any>(
  fn: (...args: P) => Promise<V>
): (...args: P) => Promise<V | undefined>;
```

### Advanced Examples and Use Cases

#### 1. Form Submission Lock

```typescript
function SubmitButton() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const submitForm = useLockFn(async (formData: FormData) => {
    try {
      setStatus('idle');
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    await submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={status !== 'idle'}>
        {status === 'success' && '✓ Submitted'}
        {status === 'error' && '✗ Failed. Try again'}
        {status === 'idle' && 'Submit'}
      </button>
    </form>
  );
}
```

#### 2. API Request Protection

```typescript
function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useLockFn(async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/data/${id}`);
      const result = await response.json();
      setData(result);
    } finally {
      setLoading(false);
    }
  });

  // Multiple buttons can safely call fetchData without race conditions
  return (
    <div>
      <button onClick={() => fetchData('1')} disabled={loading}>
        Load Data 1
      </button>
      <button onClick={() => fetchData('2')} disabled={loading}>
        Load Data 2
      </button>
      {loading && <div>Loading...</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useRequest for additional protection
function ProtectedRequestComponent() {
  const [requestCount, setRequestCount] = useState(0);

  const { run, loading } = useRequest(
    (id: string) => fetch(`/api/data/${id}`).then(r => r.json()),
    {
      manual: true,
      onSuccess: () => setRequestCount(prev => prev + 1)
    }
  );

  const lockedRun = useLockFn(run);

  return (
    <div>
      <p>Requests made: {requestCount}</p>
      <button onClick={() => lockedRun('123')} disabled={loading}>
        Fetch Data
      </button>
    </div>
  );
}
```

---

## useLongPress

### Description
A Hook for detecting long press events on target elements, with customizable delay and movement threshold.

### TypeScript Type Definitions

```typescript
interface LongPressOptions {
  delay?: number;
  moveThreshold?: { x?: number; y?: number };
  onClick?: (event: MouseEvent | TouchEvent) => void;
  onLongPressEnd?: (event: MouseEvent | TouchEvent) => void;
}

function useLongPress(
  onLongPress: (event: MouseEvent | TouchEvent) => void,
  target: Target,
  options?: LongPressOptions
): void;
```

### Advanced Examples and Use Cases

#### 1. Custom Context Menu

```typescript
function ContextMenuComponent() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const targetRef = useRef<HTMLDivElement>(null);

  const handleLongPress = (event: MouseEvent | TouchEvent) => {
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    setMenuPosition({ x: clientX, y: clientY });
    setMenuVisible(true);
  };

  const handleClick = () => {
    setMenuVisible(false);
  };

  const handleLongPressEnd = () => {
    // Optional: add haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  useLongPress(handleLongPress, targetRef, {
    delay: 500,
    onClick: handleClick,
    onLongPressEnd: handleLongPressEnd,
  });

  return (
    <div>
      <div ref={targetRef} className="long-press-target">
        Long press me for context menu
      </div>
      {menuVisible && (
        <div
          className="context-menu"
          style={{ left: menuPosition.x, top: menuPosition.y }}
        >
          <div onClick={() => console.log('Action 1')}>Action 1</div>
          <div onClick={() => console.log('Action 2')}>Action 2</div>
          <div onClick={() => console.log('Action 3')}>Action 3</div>
        </div>
      )}
    </div>
  );
}
```

#### 2. Swipe Actions List

```typescript
function SwipeableListItem({ item, onDelete, onArchive }: {
  item: Item;
  onDelete: (id: string) => void;
  onArchive: (id: string) => void;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [action, setAction] = useState<'delete' | 'archive' | null>(null);

  const handleLongPress = (event: MouseEvent | TouchEvent) => {
    // Determine which side based on touch position
    const rect = itemRef.current?.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

    if (rect) {
      const centerX = rect.left + rect.width / 2;
      setAction(clientX < centerX ? 'delete' : 'archive');
    }
  };

  const handleLongPressEnd = () => {
    if (action) {
      if (action === 'delete') {
        onDelete(item.id);
      } else {
        onArchive(item.id);
      }
    }
    setAction(null);
  };

  useLongPress(handleLongPress, itemRef, {
    delay: 300,
    moveThreshold: { x: 10, y: 10 },
    onLongPressEnd: handleLongPressEnd,
  });

  return (
    <div
      ref={itemRef}
      className={`swipeable-item ${action ? `swipe-${action}` : ''}`}
    >
      <div className="item-content">{item.content}</div>
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useClickAway for dropdown menus
function LongPressDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLongPress = () => {
    setIsOpen(true);
  };

  // Close dropdown when clicking outside
  useClickAway(() => {
    setIsOpen(false);
  }, [buttonRef, dropdownRef]);

  useLongPress(handleLongPress, buttonRef, {
    delay: 500,
    onClick: () => setIsOpen(!isOpen), // Toggle on click
  });

  return (
    <div>
      <button ref={buttonRef}>
        Long Press Menu {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div ref={dropdownRef} className="dropdown">
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
        </div>
      )}
    </div>
  );
}
```

---

## useDrag & useDrop

### Description
Hooks for handling drag and drop functionality. useDrag makes elements draggable, while useDrop creates drop zones that can accept files, text, URLs, or custom data.

### TypeScript Type Definitions

```typescript
interface DragOptions {
  onDragStart?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  dragImage?: {
    image?: string | Element;
    offsetX?: number;
    offsetY?: number;
  };
}

interface DropOptions<T = any> {
  onText?: (text: string, e: React.DragEvent) => void;
  onFiles?: (files: File[], e: React.DragEvent) => void;
  onUri?: (uri: string, e: React.DragEvent) => void;
  onDom?: (content: T, e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  onPaste?: (e: React.DragEvent) => void;
  onDragEnter?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragLeave?: (e: React.DragEvent) => void;
}

function useDrag<T>(data: T, target: Target, options?: DragOptions): void;
function useDrop<T>(target: Target, options?: DropOptions<T>): void;
```

### Advanced Examples and Use Cases

#### 1. File Upload Area

```typescript
function FileUploadArea() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const dropAreaRef = useRef<HTMLDivElement>(null);

  const handleFiles = (files: File[]) => {
    setUploadedFiles(prev => [...prev, ...files]);
  };

  useDrop(dropAreaRef, {
    onFiles: handleFiles,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
    onDragOver: (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    onDrop: (e) => {
      e.preventDefault();
      setIsDragging(false);
    },
  });

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div
        ref={dropAreaRef}
        className={`drop-area ${isDragging ? 'dragging' : ''}`}
      >
        <div className="drop-content">
          <p>Drag and drop files here</p>
          <p>or</p>
          <button>Browse Files</button>
        </div>
      </div>
      <div className="file-list">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="file-item">
            <span>{file.name}</span>
            <button onClick={() => removeFile(index)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

#### 2. Kanban Board

```typescript
function KanbanBoard() {
  const [tasks, setTasks] = useState<{
    todo: Task[];
    inProgress: Task[];
    done: Task[];
  }>({
    todo: [],
    inProgress: [],
    done: []
  });

  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const createDraggableTask = (task: Task, column: string) => {
    const taskRef = useRef<HTMLDivElement>(null);

    useDrag({ task, fromColumn: column }, taskRef, {
      onDragStart: () => setDraggedTask(task),
      onDragEnd: () => setDraggedTask(null),
    });

    return taskRef;
  };

  const createDropZone = (column: string) => {
    const dropRef = useRef<HTMLDivElement>(null);

    useDrop(dropRef, {
      onDom: (data: { task: Task; fromColumn: string }) => {
        if (data.task.id === draggedTask?.id) {
          setTasks(prev => {
            const newTasks = { ...prev };
            newTasks[data.fromColumn] = prev[data.fromColumn].filter(
              t => t.id !== data.task.id
            );
            newTasks[column] = [...prev[column], data.task];
            return newTasks;
          });
        }
      },
    });

    return dropRef;
  };

  const TaskCard = ({ task, column }: { task: Task; column: string }) => {
    const ref = createDraggableTask(task, column);

    return (
      <div ref={ref} className="task-card">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
      </div>
    );
  };

  const Column = ({ title, column, tasks: columnTasks }: {
    title: string;
    column: string;
    tasks: Task[];
  }) => {
    const ref = createDropZone(column);

    return (
      <div ref={ref} className="kanban-column">
        <h3>{title}</h3>
        <div className="tasks">
          {columnTasks.map(task => (
            <TaskCard key={task.id} task={task} column={column} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="kanban-board">
      <Column title="To Do" column="todo" tasks={tasks.todo} />
      <Column title="In Progress" column="inProgress" tasks={tasks.inProgress} />
      <Column title="Done" column="done" tasks={tasks.done} />
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useLocalStorage for persistent board state
function PersistentKanban() {
  const [tasks, setTasks] = useLocalStorage('kanban-tasks', {
    todo: [],
    inProgress: [],
    done: []
  });

  // ... rest of the Kanban implementation
}
```

---

## useUpdate

### Description
A Hook that returns a function which forces the component to re-render when called.

### TypeScript Type Definitions

```typescript
function useUpdate(): () => void;
```

### Advanced Examples and Use Cases

#### 1. Force Update on External Changes

```typescript
function ExternalDataComponent() {
  const [data, setData] = useState(null);
  const forceUpdate = useUpdate();
  const externalStore = useRef(new ExternalStore());

  useEffect(() => {
    const unsubscribe = externalStore.current.subscribe(() => {
      // Force update when external store changes
      forceUpdate();
    });

    return unsubscribe;
  }, [forceUpdate]);

  // Get fresh data from external store on every render
  const currentData = externalStore.current.getData();

  return (
    <div>
      <h3>External Data</h3>
      <p>{JSON.stringify(currentData)}</p>
      <button onClick={() => externalStore.current.update()}>
        Update External Data
      </button>
    </div>
  );
}
```

#### 2. Canvas Animation Trigger

```typescript
function AnimationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const forceUpdate = useUpdate();

  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw something based on frame
      ctx.fillStyle = `hsl(${frame % 360}, 70%, 50%)`;
      ctx.fillRect(
        Math.sin(frame * 0.05) * 100 + canvas.width / 2,
        Math.cos(frame * 0.05) * 100 + canvas.height / 2,
        50,
        50
      );

      frame++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const resetAnimation = () => {
    stopAnimation();
    forceUpdate(); // Force re-render to reset state
    setTimeout(startAnimation, 100);
  };

  return (
    <div>
      <canvas ref={canvasRef} width={400} height={400} />
      <div>
        <button onClick={startAnimation}>Start</button>
        <button onClick={stopAnimation}>Stop</button>
        <button onClick={resetAnimation}>Reset</button>
      </div>
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useEventListener for responsive updates
function ResponsiveComponent() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const forceUpdate = useUpdate();

  useEventListener('resize', () => {
    // Force update to recalculate layout
    forceUpdate();
  });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, [forceUpdate]);

  return (
    <div>
      <p>Window: {dimensions.width} x {dimensions.height}</p>
    </div>
  );
}
```

---

## useUnmountedRef

### Description
A Hook that provides a reference to track whether the component has been unmounted, useful for preventing state updates on unmounted components.

### TypeScript Type Definitions

```typescript
function useUnmountedRef(): { current: boolean };
```

### Advanced Examples and Use Cases

#### 1. Safe Async Operations

```typescript
function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const unmountedRef = useUnmountedRef();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();

      // Only update state if component is still mounted
      if (!unmountedRef.current) {
        setData(result);
      }
    } catch (error) {
      if (!unmountedRef.current) {
        console.error('Failed to fetch data:', error);
      }
    } finally {
      if (!unmountedRef.current) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}
```

#### 2. Cleanup Intervals and Timeouts

```typescript
function TimerComponent() {
  const [count, setCount] = useState(0);
  const unmountedRef = useUnmountedRef();

  useEffect(() => {
    const interval = setInterval(() => {
      // Only update state if component is mounted
      if (!unmountedRef.current) {
        setCount(prev => prev + 1);
      }
    }, 1000);

    const timeout = setTimeout(() => {
      if (!unmountedRef.current) {
        console.log('Timer completed!');
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [unmountedRef]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Component is mounted: {!unmountedRef.current ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Creating a custom safe async hook
function useSafeAsync() {
  const unmountedRef = useUnmountedRef();

  const safeAsync = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void
  ) => {
    try {
      const result = await asyncFn();
      if (!unmountedRef.current && onSuccess) {
        onSuccess(result);
      }
      return result;
    } catch (error) {
      if (!unmountedRef.current && onError) {
        onError(error as Error);
      }
      throw error;
    }
  }, [unmountedRef]);

  return safeAsync;
}

// Usage
function SafeComponent() {
  const [data, setData] = useState(null);
  const safeAsync = useSafeAsync();

  useEffect(() => {
    safeAsync(
      () => fetch('/api/data').then(r => r.json()),
      setData,
      (error) => console.error('Error:', error)
    );
  }, [safeAsync]);

  return <div>{/* render data */}</div>;
}
```

---

## useRafInterval

### Description
A Hook that implements setInterval using requestAnimationFrame, which stops execution when the page is not rendering (e.g., hidden or minimized).

### TypeScript Type Definitions

```typescript
interface RafIntervalOptions {
  immediate?: boolean;
}

function useRafInterval(
  fn: () => void,
  delay?: number,
  options?: RafIntervalOptions
): () => void;
```

### Advanced Examples and Use Cases

#### 1. Performance-Optimized Counter

```typescript
function PerformanceCounter() {
  const [count, setCount] = useState(0);
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);
  const lastTime = useRef(Date.now());

  const updateCounter = () => {
    setCount(prev => prev + 1);

    // Calculate FPS
    frameCount.current++;
    const now = Date.now();
    if (now - lastTime.current >= 1000) {
      setFps(frameCount.current);
      frameCount.current = 0;
      lastTime.current = now;
    }
  };

  const clear = useRafInterval(updateCounter, 16); // ~60fps

  return (
    <div>
      <p>Count: {count}</p>
      <p>FPS: {fps}</p>
      <p>Interval runs only when tab is visible</p>
      <button onClick={clear}>Stop</button>
    </div>
  );
}
```

#### 2. Smooth Animation Loop

```typescript
function AnimatedBall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const positionRef = useRef({ x: 200, y: 200 });
  const velocityRef = useRef({ x: 2, y: 3 });

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Update position
    positionRef.current.x += velocityRef.current.x;
    positionRef.current.y += velocityRef.current.y;

    // Bounce off walls
    if (positionRef.current.x <= 10 || positionRef.current.x >= canvas.width - 10) {
      velocityRef.current.x *= -1;
    }
    if (positionRef.current.y <= 10 || positionRef.current.y >= canvas.height - 10) {
      velocityRef.current.y *= -1;
    }

    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(positionRef.current.x, positionRef.current.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();
  };

  useRafInterval(animate, 1000 / 60); // 60 FPS

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{ border: '1px solid #ccc' }}
    />
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useDocumentVisibility
function VisibilityAwareAnimation() {
  const isVisible = useDocumentVisibility();
  const [animationActive, setAnimationActive] = useState(true);

  const animate = () => {
    if (isVisible && animationActive) {
      console.log('Animating...');
      // Animation logic here
    }
  };

  useRafInterval(animate, 16);

  return (
    <div>
      <p>Page visible: {isVisible ? 'Yes' : 'No'}</p>
      <button onClick={() => setAnimationActive(!animationActive)}>
        Toggle Animation
      </button>
    </div>
  );
}
```

---

## useCountDown

### Description
A Hook for managing countdown timers with support for targeting specific dates or setting remaining time, with millisecond precision.

### TypeScript Type Definitions

```typescript
interface CountdownOptions {
  leftTime?: number;
  targetDate?: string | number | Date;
  interval?: number;
  onEnd?: () => void;
}

interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

function useCountDown(options: CountdownOptions): [number, FormattedRes];
```

### Advanced Examples and Use Cases

#### 1. Flash Sale Timer

```typescript
function FlashSaleTimer({ endDate }: { endDate: Date }) {
  const [countdown, formatted] = useCountDown({
    targetDate: endDate,
    onEnd: () => {
      alert('Flash sale has ended!');
    }
  });

  const progress = Math.max(0, Math.min(100,
    ((Date.now() - new Date(endDate).getTime() + 24 * 60 * 60 * 1000) / (24 * 60 * 60 * 1000)) * 100
  ));

  if (countdown <= 0) {
    return <div className="sale-ended">Flash Sale Has Ended</div>;
  }

  return (
    <div className="flash-sale-timer">
      <h3>Flash Sale Ends In:</h3>
      <div className="time-display">
        <span>{String(formatted.hours).padStart(2, '0')}:</span>
        <span>{String(formatted.minutes).padStart(2, '0')}:</span>
        <span>{String(formatted.seconds).padStart(2, '0')}</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <p className="time-remaining">
        {formatted.days > 0 && `${formatted.days} days, `}
        {formatted.hours}h {formatted.minutes}m {formatted.seconds}s
      </p>
    </div>
  );
}
```

#### 2. OTP Verification Timer

```typescript
function OTPVerification() {
  const [canResend, setCanResend] = useState(false);
  const [countdown, formatted] = useCountDown({
    leftTime: 60 * 1000, // 60 seconds
    onEnd: () => setCanResend(true)
  });

  const handleResendOTP = () => {
    setCanResend(false);
    // Reset countdown
    const [, , reset] = useCountDown({ leftTime: 60 * 1000 });
    // Trigger resend logic
    resendOTP();
  };

  const resendOTP = async () => {
    try {
      await fetch('/api/resend-otp', { method: 'POST' });
      console.log('OTP resent successfully');
    } catch (error) {
      console.error('Failed to resend OTP:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter OTP" maxLength={6} />
      <button
        onClick={handleResendOTP}
        disabled={!canResend && countdown > 0}
      >
        {canResend ? 'Resend OTP' : `Resend in ${Math.ceil(countdown / 1000)}s`}
      </button>
    </div>
  );
}
```

### Integration Patterns with Other Hooks

```typescript
// Combining with useLocalStorage for persistent timers
function PersistentCountdown() {
  const [targetDate, setTargetDate] = useLocalStorage<Date | null>('countdown-target', null);
  const [countdown, formatted] = useCountDown({
    targetDate: targetDate || undefined,
    onEnd: () => {
      setTargetDate(null);
    }
  });

  const startCountdown = (minutes: number) => {
    const target = new Date(Date.now() + minutes * 60 * 1000);
    setTargetDate(target);
  };

  return (
    <div>
      <div className="countdown-display">
        {countdown > 0 ? (
          <div>
            {formatted.hours}h {formatted.minutes}m {formatted.seconds}s
          </div>
        ) : (
          <div>Timer expired</div>
        )}
      </div>
      <div className="controls">
        <button onClick={() => startCountdown(5)}>5 min</button>
        <button onClick={() => startCountdown(10)}>10 min</button>
        <button onClick={() => startCountdown(25)}>25 min</button>
        {targetDate && (
          <button onClick={() => setTargetDate(null)}>Cancel</button>
        )}
      </div>
    </div>
  );
}
```

---

## Conclusion

These advanced hooks provide powerful solutions for complex scenarios in React applications:

1. **useWebSocket** - Real-time communication with automatic reconnection management
2. **useHistoryTravel** - State management with undo/redo capabilities
3. **useReactive** - Direct property manipulation for reactive updates
4. **useEventEmitter** - Component communication through event-driven architecture
5. **useLockFn** - Prevent race conditions in asynchronous operations
6. **useRafInterval** - Performance-optimized intervals that respect visibility
7. **useCountDown** - Flexible countdown timer with multiple configuration options

When using these hooks, consider:
- **Performance impact** - Use appropriate for your use case
- **Memory management** - Clean up resources when components unmount
- **Error handling** - Implement proper error boundaries and fallbacks
- **TypeScript integration** - Leverage type safety for better development experience

These hooks can significantly simplify complex state management and interaction patterns in your React applications.