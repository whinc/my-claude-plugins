# State Management Hooks

A comprehensive reference guide for state management hooks from ahooks library.

## Table of Contents

- [useSetState](#usesetstate) - Manage object state similar to class components
- [useBoolean](#useboolean) - Elegant boolean state management
- [useCounter](#usecounter) - Counter state management
- [useMap](#usemap) - Map data structure state management
- [useSet](#useset) - Set data structure state management
- [useGetState](#usegetstate) - Get latest state value
- [useResetState](#useresetstate) - Reset state to initial value
- [useSafeState](#usesafestate) - Safe state updates
- [usePrevious](#useprevious) - Get previous value
- [useControllableValue](#usecontrollablevalue) - Control value between controlled and uncontrolled
- [useSelections](#useselections) - Manage multiple selections
- [useToggle](#usetoggle) - Toggle between two values

---

## useSetState

### Description

Manages object type state with a similar API to class component's `this.setState`. Supports partial updates and functional updates.

### Type Definition

```typescript
const [state, setState] = useSetState<T>(
  initialState: T | (() => T)
);

// setState supports two forms:
setState: (
  state: Partial<T> | null
) => void;

setState: (
  updater: (prevState: T) => Partial<T> | null
) => void;
```

### Examples

#### Basic Usage

```typescript
import { useSetState } from 'ahooks';

const [state, setState] = useSetState({
  name: 'John',
  age: 30,
  email: 'john@example.com'
});

// Partial update
const updateName = () => {
  setState({ name: 'Jane' });
  // Result: { name: 'Jane', age: 30, email: 'john@example.com' }
};

// Functional update
const incrementAge = () => {
  setState(prev => ({ age: prev.age + 1 }));
};

// Clear state
const clearState = () => {
  setState(null);
};
```

#### Complex Object Management

```typescript
interface UserProfile {
  personal: {
    name: string;
    avatar: string;
  };
  settings: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
  metadata: Record<string, any>;
}

const [profile, setProfile] = useSetState<UserProfile>({
  personal: { name: '', avatar: '' },
  settings: { theme: 'light', notifications: true },
  metadata: {}
});

// Nested update
const updateTheme = (theme: 'light' | 'dark') => {
  setProfile(prev => ({
    settings: { ...prev.settings, theme }
  }));
};
```

### Common Use Cases

- Form state management
- Complex object state updates
- Configuration management
- Multi-field data synchronization

### Performance Considerations

- Updates are shallow merges
- No automatic deep comparison
- Consider immutability for nested objects

### Migration Tips

```typescript
// From useState
const [user, setUser] = useState<User>({ name: '', age: 0 });
setUser(prev => ({ ...prev, name: 'John' }));

// To useSetState
const [user, setUser] = useSetState<User>({ name: '', age: 0 });
setUser({ name: 'John' });
```

---

## useBoolean

### Description

Elegant Hook for managing boolean state with helpful utility methods.

### Type Definition

```typescript
const [state, actions] = useBoolean(
  defaultValue?: boolean = false
);

// Actions
interface Actions {
  toggle: () => void;
  set: (value: boolean) => void;
  setTrue: () => void;
  setFalse: () => void;
}
```

### Examples

#### Basic Usage

```typescript
import { useBoolean } from 'ahooks';

const [visible, { toggle, set, setTrue, setFalse }] = useBoolean(false);

// In component
return (
  <div>
    <button onClick={toggle}>Toggle Modal</button>
    <button onClick={setTrue}>Show Modal</button>
    <button onClick={setFalse}>Hide Modal</button>
    <button onClick={() => set(true)}>Force Show</button>

    {visible && <Modal />}
  </div>
);
```

#### Loading State Management

```typescript
function DataFetcher() {
  const [loading, { setTrue: startLoading, setFalse: stopLoading }] = useBoolean(false);

  const fetchData = async () => {
    startLoading();
    try {
      const data = await api.fetch();
      setData(data);
    } finally {
      stopLoading();
    }
  };

  return (
    <button onClick={fetchData} disabled={loading}>
      {loading ? 'Loading...' : 'Fetch Data'}
    </button>
  );
}
```

### Common Use Cases

- Modal visibility
- Loading states
- Feature toggles
- Form validation states

### Performance Considerations

- All action functions are stable
- No additional re-renders for action updates

### Migration Tips

```typescript
// From useState
const [open, setOpen] = useState(false);
const toggle = () => setOpen(prev => !prev);

// To useBoolean
const [open, { toggle }] = useBoolean(false);
```

---

## useCounter

### Description

Hook for managing counter state with increment, decrement, reset, and set functionality.

### Type Definition

```typescript
const [current, actions] = useCounter(
  initialValue?: number = 0,
  options?: {
    min?: number;
    max?: number;
  }
);

// Actions
interface Actions {
  inc: (delta?: number) => void;
  dec: (delta?: number) => void;
  set: (value: number) => void;
  reset: () => void;
}
```

### Examples

#### Basic Counter

```typescript
import { useCounter } from 'ahooks';

const [count, { inc, dec, set, reset }] = useCounter(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => inc()}>+1</button>
    <button onClick={() => inc(5)}>+5</button>
    <button onClick={() => dec()}>-1</button>
    <button onClick={() => dec(3)}>-3</button>
    <button onClick={() => set(10)}>Set to 10</button>
    <button onClick={reset}>Reset</button>
  </div>
);
```

#### Bounded Counter

```typescript
function QuantitySelector() {
  const [quantity, { inc, dec }] = useCounter(1, {
    min: 1,
    max: 10
  });

  return (
    <div>
      <button onClick={() => dec()} disabled={quantity <= 1}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => inc()} disabled={quantity >= 10}>
        +
      </button>
    </div>
  );
}
```

#### Pagination Example

```typescript
function Pagination({ totalPages }: { totalPages: number }) {
  const [currentPage, { inc: nextPage, dec: prevPage, set: goToPage }] =
    useCounter(1, { min: 1, max: totalPages });

  return (
    <div>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}
```

### Common Use Cases

- Quantity selectors
- Pagination controls
- Score tracking
- Step counters

### Performance Considerations

- Boundary checks are performed on each update
- Action functions are stable

---

## useMap

### Description

Hook for managing Map data structure state with convenient CRUD operations.

### Type Definition

```typescript
const [map, actions] = useMap<K, V>(
  initialValue?: Iterable<[K, V]>
);

// Actions
interface Actions {
  set: (key: K, value: V) => void;
  get: (key: K) => V | undefined;
  setAll: (newMap: Iterable<[K, V]>) => void;
  remove: (key: K) => void;
  reset: () => void;
}
```

### Examples

#### Basic Usage

```typescript
import { useMap } from 'ahooks';

const [userRoles, { set, get, remove, reset, setAll }] = useMap([
  ['admin', ['read', 'write', 'delete']],
  ['user', ['read']]
]);

// Add or update role
const addRole = (role: string, permissions: string[]) => {
  set(role, permissions);
};

// Get permissions
const getPermissions = (role: string) => {
  return get(role);
};

// Remove role
const removeRole = (role: string) => {
  remove(role);
};

// Replace all roles
const updateAllRoles = (newRoles: Map<string, string[]>) => {
  setAll(newRoles);
};
```

#### Cache Management

```typescript
function DataCache() {
  const [cache, { set, get, remove }] = useMap<string, any>();

  const fetchData = async (key: string) => {
    // Check cache first
    const cached = get(key);
    if (cached) return cached;

    // Fetch and cache
    const data = await api.fetchData(key);
    set(key, data);
    return data;
  };

  const clearCache = (key: string) => {
    remove(key);
  };

  return { fetchData, clearCache };
}
```

#### Form Field Validation

```typescript
function useFormValidation() {
  const [errors, { set, remove, reset }] = useMap<string, string>();

  const setFieldError = (field: string, message: string) => {
    set(field, message);
  };

  const clearFieldError = (field: string) => {
    remove(field);
  };

  const hasErrors = errors.size > 0;

  return {
    errors,
    setFieldError,
    clearFieldError,
    hasErrors,
    clearAllErrors: reset
  };
}
```

### Common Use Cases

- Cache management
- Form validation errors
- User permissions
- Dynamic data collection

### Performance Considerations

- Map provides O(1) complexity for get/set/delete operations
- Preserves insertion order

---

## useSet

### Description

Hook for managing Set data structure state with add, remove, and reset operations.

### Type Definition

```typescript
const [set, actions] = useSet<T>(
  initialValue?: Iterable<T>
);

// Actions
interface Actions {
  add: (value: T) => void;
  remove: (value: T) => void;
  reset: () => void;
}
```

### Examples

#### Basic Usage

```typescript
import { useSet } from 'ahooks';

const [selectedItems, { add, remove, reset }] = useSet(['item1', 'item2']);

// Add item
const selectItem = (item: string) => {
  add(item);
};

// Remove item
const deselectItem = (item: string) => {
  remove(item);
};

// Toggle selection
const toggleSelection = (item: string) => {
  if (selectedItems.has(item)) {
    remove(item);
  } else {
    add(item);
  }
};

// Clear all selections
const clearAll = () => {
  reset();
};
```

#### Tag Manager

```typescript
function TagManager() {
  const [tags, { add, remove, reset }] = useSet<string>([]);
  const [inputValue, setInputValue] = useState('');

  const addTag = () => {
    if (inputValue.trim()) {
      add(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div>
      <div>
        {Array.from(tags).map(tag => (
          <span key={tag}>
            {tag}
            <button onClick={() => remove(tag)}>×</button>
          </span>
        ))}
      </div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTag()}
        placeholder="Add tag"
      />
      <button onClick={reset}>Clear All</button>
    </div>
  );
}
```

#### Permission Manager

```typescript
function PermissionManager() {
  const [permissions, { add, remove }] = useSet<string>(['read', 'write']);

  const allPermissions = ['read', 'write', 'delete', 'admin', 'manage_users'];

  return (
    <div>
      <h3>Permissions:</h3>
      {allPermissions.map(perm => (
        <label key={perm}>
          <input
            type="checkbox"
            checked={permissions.has(perm)}
            onChange={(e) => {
              if (e.target.checked) {
                add(perm);
              } else {
                remove(perm);
              }
            }}
          />
          {perm}
        </label>
      ))}
    </div>
  );
}
```

### Common Use Cases

- Multiple selection
- Tag management
- Unique collections
- Permission management

### Performance Considerations

- Set provides O(1) complexity for add/delete/has operations
- Automatically handles duplicates

---

## useGetState

### Description

Adds a getter method to React.useState to get the latest state value instantly.

### Type Definition

```typescript
const [state, setState, getState] = useGetState<T>(
  initialValue: T
);

// getState returns the current value
getState: () => T;
```

### Examples

#### Basic Usage

```typescript
import { useGetState } from 'ahooks';

function TimerComponent() {
  const [count, setCount, getCount] = useGetState(0);

  const handleClick = () => {
    // Using getState inside async operations
    setTimeout(() => {
      console.log('Current count:', getCount()); // Gets latest value
      setCount(prev => prev + 1);
    }, 1000);
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

#### Async Operations

```typescript
function DataFetcher() {
  const [loading, setLoading, getLoading] = useGetState(false);
  const [data, setData] = useGetState<any[]>([]);

  const fetchData = async () => {
    if (getLoading()) return; // Check latest state without re-render

    setLoading(true);
    try {
      const result = await api.fetchData();
      // Use getState to access latest data
      const currentData = getData();
      setData([...currentData, ...result]);
    } finally {
      setLoading(false);
    }
  };

  return <button onClick={fetchData} disabled={loading}>
    {loading ? 'Loading...' : 'Fetch Data'}
  </button>;
}
```

#### Event Listener

```typescript
function KeyboardHandler() {
  const [keys, setKeys, getKeys] = useGetState<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentKeys = getKeys();
      if (!currentKeys.has(e.key)) {
        setKeys(new Set([...currentKeys, e.key]));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const currentKeys = getKeys();
      const newKeys = new Set(currentKeys);
      newKeys.delete(e.key);
      setKeys(newKeys);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return <div>Pressed keys: {Array.from(keys).join(', ')}</div>;
}
```

### Common Use Cases

- Accessing state in closures
- Async operations
- Event listeners
- Avoiding stale closures

### Performance Considerations

- getState is a stable reference
- No re-renders when calling getState

---

## useResetState

### Description

Provides a reset function to restore state to its initial value.

### Type Definition

```typescript
const [state, setState, resetState] = useResetState<T>(
  initialValue: T
);

resetState: () => void;
```

### Examples

#### Form Reset

```typescript
function UserForm() {
  const [formData, setFormData, resetForm] = useResetState({
    name: '',
    email: '',
    age: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form...
    resetForm(); // Reset after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        placeholder="Name"
      />
      <input
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>Reset</button>
    </form>
  );
}
```

#### Search Filters

```typescript
function SearchFilters() {
  const [filters, setFilters, resetFilters] = useResetState({
    category: '',
    priceRange: [0, 1000],
    rating: 0,
    inStock: false
  });

  const applyFilters = () => {
    // Apply filters...
  };

  const clearFilters = () => {
    resetFilters();
  };

  return (
    <div>
      <select
        value={filters.category}
        onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
      <button onClick={applyFilters}>Apply</button>
      <button onClick={clearFilters}>Clear All</button>
    </div>
  );
}
```

### Common Use Cases

- Form reset functionality
- Filter clearing
- Settings restoration
- Game state reset

### Performance Considerations

- resetState is a stable reference
- Initial value is preserved internally

---

## useSafeState

### Description

Safe state setter that prevents updates on unmounted components.

### Type Definition

```typescript
const [state, setState] = useSafeState<T>(
  initialValue: T
);

// setState works like useState but checks if component is mounted
setState: (value: T | ((prev: T) => T)) => void;
```

### Examples

#### Async Data Fetching

```typescript
function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useSafeState<User | null>(null);
  const [loading, setLoading] = useSafeState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userData = await api.getUser(userId);
        setUser(userData); // Safe - won't update if unmounted
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false); // Safe - won't update if unmounted
      }
    };

    fetchUser();

    return () => {
      // Cleanup if needed
    };
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return <div>{user.name}</div>;
}
```

#### Timer Management

```typescript
function Countdown({ initialTime }: { initialTime: number }) {
  const [timeLeft, setTimeLeft] = useSafeState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>Time left: {timeLeft}s</div>;
}
```

### Common Use Cases

- Async operations
- Timers
- Network requests
- Animation frames

### Performance Considerations

- Minimal overhead
- Prevents memory leaks
- No impact on normal state updates

---

## usePrevious

### Description

Hook to get the previous value of a variable from the last render.

### Type Definition

```typescript
const previousValue = usePrevious<T>(
  value: T
): T | undefined;
```

### Examples

#### Track Value Changes

```typescript
function ValueChangeTracker({ value }: { value: any }) {
  const prevValue = usePrevious(value);

  useEffect(() => {
    if (prevValue !== value) {
      console.log('Value changed from', prevValue, 'to', value);
    }
  }, [value, prevValue]);

  return (
    <div>
      <p>Current: {JSON.stringify(value)}</p>
      <p>Previous: {JSON.stringify(prevValue)}</p>
    </div>
  );
}
```

#### Scroll Direction

```typescript
function ScrollDirection() {
  const [scrollY, setScrollY] = useState(0);
  const prevScrollY = usePrevious(scrollY);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDirection = prevScrollY !== undefined
    ? scrollY > prevScrollY ? 'down' : 'up'
    : 'none';

  return <div>Scrolling: {scrollDirection}</div>;
}
```

#### Focus Management

```typescript
function FocusTracker() {
  const [focusedElement, setFocusedElement] = useState<string>('');
  const prevFocusedElement = usePrevious(focusedElement);

  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      setFocusedElement(e.target.id || e.target.tagName);
    };

    document.addEventListener('focusin', handleFocus);
    return () => document.removeEventListener('focusin', handleFocus);
  }, []);

  return (
    <div>
      <p>Currently focused: {focusedElement}</p>
      <p>Previously focused: {prevFocusedElement}</p>
    </div>
  );
}
```

### Common Use Cases

- Comparing value changes
- Scroll direction detection
- Animation state transitions
- Debugging state changes

### Performance Considerations

- Uses useRef internally
- No re-renders triggered

---

## useControllableValue

### Description

Bridge between controlled and uncontrolled components, automatically handling value state.

### Type Definition

```typescript
const [state, setState] = useControllableValue<T>(
  props: {
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
  }
);

// Alternative signature
const [state, setState] = useControllableValue<T>(
  value?: T,
  defaultValue?: T,
  onChange?: (value: T) => void
);
```

### Examples

#### Input Component

```typescript
function SmartInput({ value, defaultValue = '', onChange, ...props }) {
  const [innerValue, setInnerValue] = useControllableValue({
    value,
    defaultValue,
    onChange
  });

  return (
    <input
      value={innerValue}
      onChange={(e) => setInnerValue(e.target.value)}
      {...props}
    />
  );
}

// Usage examples:

// Controlled
function App() {
  const [text, setText] = useState('');
  return <SmartInput value={text} onChange={setText} />;
}

// Uncontrolled
function App() {
  return <SmartInput defaultValue="Hello" />;
}

// Mixed
function App() {
  const [value, setValue] = useState('');
  return (
    <SmartInput
      value={value}
      defaultValue="Default"
      onChange={setValue}
    />
  );
}
```

#### Custom Component

```typescript
function Counter({ value, defaultValue = 0, onChange }) {
  const [count, setCount] = useControllableValue({
    value,
    defaultValue,
    onChange
  });

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(5);

  return (
    <div>
      <Counter value={count} onChange={setCount} />
      <p>Parent count: {count}</p>
    </div>
  );
}
```

### Common Use Cases

- Reusable components
- Form inputs
- Library development
- Flexible component APIs

### Migration Tips

```typescript
// Before
function MyComponent({ value, onChange }) {
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(defaultValue);

  const currentValue = isControlled ? value : innerValue;
  const handleChange = (newValue) => {
    if (onChange) onChange(newValue);
    if (!isControlled) setInnerValue(newValue);
  };

  // ...
}

// After
function MyComponent({ value, defaultValue, onChange }) {
  const [currentValue, setCurrentValue] = useControllableValue({
    value,
    defaultValue,
    onChange
  });

  // ...
}
```

---

## useSelections

### Description

Hook for managing multiple selections with select, unselect, toggle, and clear operations.

### Type Definition

```typescript
const [selected, actions] = useSelections<T>(
  items: T[],
  defaultSelected?: T[]
);

// Actions
interface Actions {
  selected: Set<T>;
  select: (item: T) => void;
  unSelect: (item: T) => void;
  toggle: (item: T) => void;
  selectAll: () => void;
  unSelectAll: () => void;
  noneSelected: boolean;
  allSelected: boolean;
  partiallySelected: boolean;
  isSelected: (item: T) => boolean;
}
```

### Examples

#### Basic Selection

```typescript
function ItemSelector() {
  const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
  const [selected, { select, unSelect, toggle, selectAll, unSelectAll }] =
    useSelections(items, []);

  return (
    <div>
      <div>
        <button onClick={selectAll}>Select All</button>
        <button onClick={unSelectAll}>Clear All</button>
      </div>

      {items.map(item => (
        <label key={item}>
          <input
            type="checkbox"
            checked={selected.has(item)}
            onChange={() => toggle(item)}
          />
          {item}
        </label>
      ))}

      <p>Selected: {Array.from(selected).join(', ')}</p>
    </div>
  );
}
```

#### Data Table with Selection

```typescript
function SelectableTable({ data }) {
  const [selected, { toggle, selectAll, unSelectAll, allSelected, partiallySelected }] =
    useSelections(data.map(row => row.id));

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={allSelected}
              indeterminate={partiallySelected}
              onChange={() => allSelected ? unSelectAll() : selectAll()}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                checked={selected.has(row.id)}
                onChange={() => toggle(row.id)}
              />
            </td>
            <td>{row.name}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

#### Advanced Selection

```typescript
function AdvancedSelector() {
  const options = [
    { id: 1, label: 'Option 1', category: 'A' },
    { id: 2, label: 'Option 2', category: 'A' },
    { id: 3, label: 'Option 3', category: 'B' },
    { id: 4, label: 'Option 4', category: 'B' },
  ];

  const [selected, { toggle, select, unSelect, isSelected }] =
    useSelections(options.map(opt => opt.id));

  const selectByCategory = (category: string) => {
    options
      .filter(opt => opt.category === category)
      .forEach(opt => select(opt.id));
  };

  return (
    <div>
      <div>
        <button onClick={() => selectByCategory('A')}>
          Select Category A
        </button>
        <button onClick={() => selectByCategory('B')}>
          Select Category B
        </button>
      </div>

      {options.map(option => (
        <label key={option.id}>
          <input
            type="checkbox"
            checked={isSelected(option.id)}
            onChange={() => toggle(option.id)}
          />
          {option.label} ({option.category})
        </label>
      ))}
    </div>
  );
}
```

### Common Use Cases

- Data table selection
- File selection
- Multi-select dropdowns
- Batch operations

### Performance Considerations

- Uses Set for O(1) lookup
- All actions are stable functions

---

## useToggle

### Description

Hook for toggling between two values, with optional custom values.

### Type Definition

```typescript
// Basic boolean toggle
const [state, actions] = useToggle(defaultValue?: boolean = false);

// Toggle between two custom values
const [state, actions] = useToggle<T, U>(defaultValue: T, reverseValue: U);

// Actions
interface Actions {
  toggle: () => void;
  set: (value: T | U) => void;
  setLeft: () => void;
  setRight: () => void;
}
```

### Examples

#### Basic Boolean Toggle

```typescript
function ThemeSwitcher() {
  const [isDark, { toggle, setTrue, setFalse }] = useToggle(false);

  return (
    <div className={isDark ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggle}>
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
      <button onClick={setTrue}>Force Dark</button>
      <button onClick={setFalse}>Force Light</button>
    </div>
  );
}
```

#### Custom Value Toggle

```typescript
function LanguageSwitcher() {
  const [language, { toggle, set }] = useToggle('en', 'zh');

  return (
    <div>
      <p>Current language: {language === 'en' ? 'English' : '中文'}</p>
      <button onClick={toggle}>
        {language === 'en' ? '切换到中文' : 'Switch to English'}
      </button>
      <button onClick={() => set('en')}>English</button>
      <button onClick={() => set('zh')}>中文</button>
    </div>
  );
}
```

#### View Mode Toggle

```typescript
function DataView({ data }) {
  const [viewMode, { toggle, setLeft, setRight }] = useToggle('list', 'grid');

  return (
    <div>
      <div className="controls">
        <button onClick={setLeft} className={viewMode === 'list' ? 'active' : ''}>
          List View
        </button>
        <button onClick={toggle}>
          Toggle View
        </button>
        <button onClick={setRight} className={viewMode === 'grid' ? 'active' : ''}>
          Grid View
        </button>
      </div>

      {viewMode === 'list' ? (
        <ul>
          {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      ) : (
        <div className="grid">
          {data.map(item => (
            <div key={item.id} className="grid-item">
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

#### Status Toggle

```typescript
function TaskItem({ task }) {
  const [status, { toggle, set }] = useToggle('pending', 'completed');

  return (
    <div className={`task ${status}`}>
      <span>{task.name}</span>
      <button onClick={toggle}>
        {status === 'pending' ? 'Complete' : 'Reopen'}
      </button>
      <select
        value={status}
        onChange={(e) => set(e.target.value)}
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}
```

### Common Use Cases

- Theme switching
- Language selection
- View mode changes
- Status toggles
- Expand/collapse

### Performance Considerations

- All action functions are stable
- No re-renders for action updates

---

## Quick Reference

```typescript
// Import all state hooks
import {
  useSetState,
  useBoolean,
  useCounter,
  useMap,
  useSet,
  useGetState,
  useResetState,
  useSafeState,
  usePrevious,
  useControllableValue,
  useSelections,
  useToggle
} from 'ahooks';

// State management patterns summary

// 1. Object state
const [state, setState] = useSetState(initialObject);

// 2. Boolean state
const [bool, { toggle, setTrue, setFalse }] = useBoolean(false);

// 3. Counter state
const [count, { inc, dec, reset }] = useCounter(0, { min: 0, max: 100 });

// 4. Collection state
const [map, { set, get, remove }] = useMap();
const [set, { add, remove, reset }] = useSet();

// 5. State access
const [state, setState, getState] = useGetState(initialValue);
const [state, setState, reset] = useResetState(initialValue);
const prevValue = usePrevious(currentValue);

// 6. Advanced patterns
const [value, setValue] = useControllableValue(props);
const [selected, { toggle, selectAll }] = useSelections(items);
const [value, { toggle, setLeft, setRight }] = useToggle('a', 'b');
```

## Best Practices

1. **Choose the right hook**
   - useSetState for complex objects
   - useBoolean for simple toggles
   - useCounter for numeric values

2. **Performance optimization**
   - Use useGetState to avoid stale closures
   - Use useSafeState for async operations
   - Prefer specific hooks over useState when applicable

3. **Type safety**
   - Always provide type definitions
   - Use TypeScript generics

4. **Component design**
   - Use useControllableValue for reusable components
   - Combine hooks for complex state management