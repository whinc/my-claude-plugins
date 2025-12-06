# Lifecycle Effect Hooks Reference

A comprehensive reference for ahooks lifecycle effect hooks.

## Table of Contents

- [useMount](#usemount)
- [useUnmount](#useunmount)
- [useUpdateEffect](#useupdateeffect)
- [useAsyncEffect](#useasynceffect)
- [useDeepCompareEffect](#usedeepcompareeffect)
- [useDeepCompareLayoutEffect](#usedeepcomparelayouteffect)
- [useUpdateLayoutEffect](#useupdatelayouteffect)
- [useTrackedEffect](#usetrackedeffect)
- [useWhyDidYouUpdate](#usewhydidyouupdate)

---

## useMount

### English Description
A hook that executes only once during component initialization. This is essentially a convenient wrapper around `useEffect` with an empty dependency array.

### TypeScript Type Definition

```typescript
import { EffectCallback } from 'react';

function useMount(fn: EffectCallback): void;
```

### Practical Example

```typescript
import React, { useState } from 'react';
import { useMount } from 'ahooks';

const UserProfile = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Only fetch data once when component mounts
  useMount(() => {
    console.log('Component mounted');
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch user:', error);
        setLoading(false);
      });
  });

  if (loading) return <div>Loading...</div>;
  return <div>{user?.name}</div>;
};
```

### Common Use Cases

- **Initial data fetching**: Fetch data when component first loads
- **Setup subscriptions**: Establish WebSocket connections or event listeners
- **Initialize third-party libraries**: Configure libraries like D3.js, Chart.js
- **Logging and analytics**: Track component mount events
- **DOM measurements**: Get initial dimensions or positions

### Performance Considerations

- UseMount is optimized for one-time execution
- Avoid heavy computations in mount callback as it blocks initial render
- Consider React.Suspense for data fetching with React 18+
- Memory leaks can occur if async operations aren't properly cleaned up

### Migration Tips

```typescript
// Before
useEffect(() => {
  // Initialization logic
}, []); // Empty dependency array

// After
useMount(() => {
  // Initialization logic
});
```

---

## useUnmount

### English Description
A hook that executes when a component is unmounted. Perfect for cleanup operations.

### TypeScript Type Definition

```typescript
function useUnmount(fn: () => void): void;
```

### Practical Example

```typescript
import React, { useState } from 'react';
import { useUnmount, useInterval } from 'ahooks';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(() => {
    setCount(c => c + 1);
  }, isRunning ? 1000 : null);

  // Cleanup when component unmounts
  useUnmount(() => {
    console.log('Timer component unmounted');
    // Save current count to localStorage
    localStorage.setItem('timerCount', count.toString());
    // Clear any ongoing operations
    setIsRunning(false);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};
```

### Common Use Cases

- **Abort pending requests**: Cancel fetch operations with AbortController
- **Clear intervals/timeouts**: Prevent memory leaks from timers
- **Close WebSocket connections**: Properly cleanup network connections
- **Save state**: Persist data before component unmounts
- **Remove event listeners**: Cleanup global event handlers
- **Reset global state**: Clear global stores or context

### Performance Considerations

- Always cleanup async operations to prevent memory leaks
- Use useUnmountedRef for async operations that might complete after unmount
- Consider React's built-in cleanup in useEffect return function

### Migration Tips

```typescript
// Before
useEffect(() => {
  return () => {
    // Cleanup logic
  };
}, []);

// After
useUnmount(() => {
  // Cleanup logic
});
```

---

## useUpdateEffect

### English Description
Similar to `useEffect`, but skips the initial execution. Only runs when dependencies change.

### TypeScript Type Definition

```typescript
import { EffectCallback, DependencyList } from 'react';

function useUpdateEffect(
  effect: EffectCallback,
  deps?: DependencyList
): void;
```

### Practical Example

```typescript
import React, { useState, useEffect } from 'react';
import { useUpdateEffect } from 'ahooks';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [initialResults, setInitialResults] = useState([]);

  // Fetch initial results
  useEffect(() => {
    fetch('/api/default-results')
      .then(res => res.json())
      .then(data => {
        setInitialResults(data);
        setResults(data);
      });
  }, []);

  // Only search when query changes, not on initial render
  useUpdateEffect(() => {
    if (query.trim()) {
      console.log('Searching for:', query);
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => setResults(data));
    } else {
      setResults(initialResults);
    }
  }, [query]); // This effect won't run on initial mount

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
```

### Common Use Cases

- **Form validation**: Validate only when form values change
- **Search functionality**: Trigger search only when search term changes
- **Responsive adjustments**: Update layout only when size changes
- **Data synchronization**: Sync data when specific props change
- **Side effects based on state**: Run effects only for state updates

### Performance Considerations

- Prevents unnecessary initial render operations
- Useful when initial setup should be separate from update logic
- Can be combined with useMemo/useCallback for optimization
- Be careful with dependency arrays to avoid infinite loops

### Migration Tips

```typescript
// Before
useEffect(() => {
  if (isMounted.current) {
    // Effect logic
  }
}, [deps]);

// After
useUpdateEffect(() => {
  // Effect logic - no need for isMounted check
}, [deps]);
```

---

## useAsyncEffect

### English Description
An enhanced `useEffect` that supports async functions and provides cancellation capabilities.

### TypeScript Type Definition

```typescript
import { DependencyList } from 'react';

type AsyncEffectReturn = AsyncGenerator<void, void, unknown> | Promise<void>;

function useAsyncEffect(
  effect: () => AsyncEffectReturn,
  deps?: DependencyList
): void;
```

### Practical Example

```typescript
import React, { useState } from 'react';
import { useAsyncEffect } from 'ahooks';

const DataFetcher = ({ url }: { url: string }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useAsyncEffect(async function* () {
    try {
      setLoading(true);

      // Simulate async operation with cancellation support
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Yield allows for interruption
      yield;

      setData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

// Example with AsyncGenerator for complex async flows
const ComplexAsyncFlow = () => {
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState([]);

  useAsyncEffect(function* () {
    setStatus('processing');
    const results = [];

    // Step 1: Fetch initial data
    const initialData = yield fetch('/api/step1');
    const step1 = yield initialData.json();
    results.push(step1);

    // Step 2: Process data (can be interrupted)
    yield new Promise(resolve => setTimeout(resolve, 1000));
    results.push({ processed: true });

    // Step 3: Fetch additional data
    const additionalData = yield fetch('/api/step2');
    const step2 = yield additionalData.json();
    results.push(step2);

    setResult(results);
    setStatus('completed');
  }, []);

  return (
    <div>
      <p>Status: {status}</p>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};
```

### Common Use Cases

- **Multi-step async operations**: Chain multiple async operations
- **Interruptible async flows**: Allow cancellation of long-running operations
- **Async data fetching with cleanup**: Properly handle component unmount during fetch
- **Sequential async processing**: Process data in steps with potential interruption
- **Async generators**: Handle streams of data

### Performance Considerations

- Automatic cleanup prevents memory leaks
- Generator pattern allows for interruption
- More overhead than regular useEffect for simple cases
- Consider AbortController for fetch operations

### Migration Tips

```typescript
// Before
useEffect(() => {
  let isMounted = true;

  async function fetchData() {
    const data = await fetch(url);
    if (isMounted) {
      setData(data);
    }
  }

  fetchData();

  return () => {
    isMounted = false;
  };
}, [url]);

// After
useAsyncEffect(function* () {
  const data = yield fetch(url);
  setData(data);
}, [url]);
```

---

## useDeepCompareEffect

### English Description
Similar to `useEffect`, but performs deep comparison of dependencies using `react-fast-compare`.

### TypeScript Type Definition

```typescript
import { EffectCallback, DependencyList } from 'react';

function useDeepCompareEffect(
  effect: EffectCallback,
  deps: DependencyList
): void;
```

### Practical Example

```typescript
import React, { useState } from 'react';
import { useDeepCompareEffect } from 'ahooks';

const ConfigurationPanel = () => {
  const [config, setConfig] = useState({
    theme: { primary: '#1890ff', secondary: '#52c41a' },
    layout: { header: true, sidebar: true, footer: false },
    features: { notifications: true, analytics: false, beta: true }
  });

  const [derivedSettings, setDerivedSettings] = useState({});

  // This effect will only run when config actually changes
  useDeepCompareEffect(() => {
    console.log('Configuration changed, applying new settings');

    const newSettings = {
      isDarkMode: config.theme.primary === '#1890ff',
      hasMinimalLayout: !config.layout.header && !config.layout.sidebar,
      featureCount: Object.values(config.features).filter(Boolean).length
    };

    setDerivedSettings(newSettings);

    // Apply configuration to external system
    applyConfiguration(config);
  }, [config]); // Deep comparison of config object

  const applyConfiguration = (newConfig) => {
    // Simulate applying configuration to external system
    localStorage.setItem('app-config', JSON.stringify(newConfig));
  };

  return (
    <div>
      <h3>Configuration</h3>
      <div>
        <label>
          Primary Color:
          <input
            type="color"
            value={config.theme.primary}
            onChange={(e) => setConfig(prev => ({
              ...prev,
              theme: { ...prev.theme, primary: e.target.value }
            }))}
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={config.features.notifications}
            onChange={(e) => setConfig(prev => ({
              ...prev,
              features: { ...prev.features, notifications: e.target.checked }
            }))}
          />
          Enable Notifications
        </label>
      </div>

      <h4>Derived Settings</h4>
      <pre>{JSON.stringify(derivedSettings, null, 2)}</pre>
    </div>
  );
};

// Example with array dependencies
const DataTable = ({ data }: { data: Array<{ id: number; name: string }> }) => {
  const [processedData, setProcessedData] = useState([]);

  useDeepCompareEffect(() => {
    console.log('Processing data array');
    const processed = data.map((item, index) => ({
      ...item,
      rowIndex: index,
      hash: hashCode(JSON.stringify(item))
    }));
    setProcessedData(processed);
  }, [data]); // Deep comparison of array

  return (
    <table>
      <tbody>
        {processedData.map(item => (
          <tr key={item.id}>
            <td>{item.rowIndex}</td>
            <td>{item.name}</td>
            <td>{item.hash}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
```

### Common Use Cases

- **Complex object dependencies**: When dependencies are nested objects or arrays
- **Configuration objects**: Monitor changes in complex configuration structures
- **Data transformations**: Re-process only when data actually changes
- **API response handling**: React only when response structure changes
- **State synchronization**: Sync with external systems based on complex state

### Performance Considerations

- Deep comparison has performance overhead for large objects
- Use only when dependencies are complex and change infrequently
- Consider useMemo/useCallback for expensive computations
- react-fast-compare is optimized but still slower than shallow comparison

### Migration Tips

```typescript
// Before
useEffect(() => {
  // Effect logic
}, [JSON.stringify(config)]); // Manual deep comparison

// After
useDeepCompareEffect(() => {
  // Effect logic
}, [config]); // Automatic deep comparison
```

---

## useDeepCompareLayoutEffect

### English Description
Similar to `useLayoutEffect`, but performs deep comparison of dependencies. Runs synchronously after DOM mutations.

### TypeScript Type Definition

```typescript
import { EffectCallback, DependencyList } from 'react';

function useDeepCompareLayoutEffect(
  effect: EffectCallback,
  deps: DependencyList
): void;
```

### Practical Example

```typescript
import React, { useState, useRef } from 'react';
import { useDeepCompareLayoutEffect } from 'ahooks';

const DraggableChart = ({ data, config }: {
  data: Array<{ x: number; y: number }>;
  config: { width: number; height: number; colors: string[] };
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useDeepCompareLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw chart based on data and config
    drawChart(ctx, data, config);

    // Measure and update dimensions synchronously
    const rect = canvas.getBoundingClientRect();
    setDimensions({ width: rect.width, height: rect.height });

  }, [data, config]); // Deep comparison of complex objects

  const drawChart = (ctx: CanvasRenderingContext2D, data, config) => {
    // Chart drawing logic that needs to be synchronous
    ctx.strokeStyle = config.colors[0] || '#000';
    ctx.lineWidth = 2;

    ctx.beginPath();
    data.forEach((point, index) => {
      const x = (point.x / 100) * config.width;
      const y = config.height - (point.y / 100) * config.height;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={config.width}
        height={config.height}
        style={{ border: '1px solid #ccc' }}
      />
      <p>Dimensions: {dimensions.width} x {dimensions.height}</p>
    </div>
  );
};

// Example with DOM measurement
const ResizeSensitiveComponent = ({
  styleConfig
}: {
  styleConfig: {
    padding: number;
    margin: number;
    breakpoints: { sm: number; md: number; lg: number };
  };
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ width: 0, breakpoint: 'sm' });

  useDeepCompareLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Apply styles synchronously to avoid flicker
    Object.assign(container.style, {
      padding: `${styleConfig.padding}px`,
      margin: `${styleConfig.margin}px`
    });

    // Measure after style application
    const { width } = container.getBoundingClientRect();

    // Determine breakpoint
    let breakpoint = 'sm';
    if (width >= styleConfig.breakpoints.lg) breakpoint = 'lg';
    else if (width >= styleConfig.breakpoints.md) breakpoint = 'md';

    setLayout({ width, breakpoint });
  }, [styleConfig]);

  return (
    <div ref={containerRef}>
      <p>Layout: {layout.breakpoint} ({Math.round(layout.width)}px)</p>
      <p>Breakpoints: {JSON.stringify(styleConfig.breakpoints)}</p>
    </div>
  );
};
```

### Common Use Cases

- **DOM measurements**: Get accurate measurements after style changes
- **Canvas/SVG operations**: Synchronous drawing based on complex data
- **Animation setup**: Configure animations before browser paint
- **Layout calculations**: Calculate layouts without visual flicker
- **Third-party library integration**: Sync DOM changes with external libraries

### Performance Considerations

- Blocks browser paint until effect completes
- Deep comparison adds overhead to synchronous operation
- Use only when DOM measurement is critical
- Consider requestAnimationFrame for heavy calculations

### Migration Tips

```typescript
// Before
useLayoutEffect(() => {
  // Effect logic
}, [JSON.stringify(config)]);

// After
useDeepCompareLayoutEffect(() => {
  // Effect logic
}, [config]);
```

---

## useUpdateLayoutEffect

### English Description
Similar to `useLayoutEffect`, but skips the initial execution. Runs synchronously after DOM mutations on updates only.

### TypeScript Type Definition

```typescript
import { EffectCallback, DependencyList } from 'react';

function useUpdateLayoutEffect(
  effect: EffectCallback,
  deps?: DependencyList
): void;
```

### Practical Example

```typescript
import React, { useState, useRef, useLayoutEffect } from 'react';
import { useUpdateLayoutEffect } from 'ahooks';

const SmoothTransition = ({ targetPosition }: { targetPosition: { x: number; y: number } }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  // Initial setup - only runs once
  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial position
    element.style.transform = `translate(0px, 0px)`;
    setIsInitialized(true);
  }, []);

  // Update position only on subsequent changes
  useUpdateLayoutEffect(() => {
    if (!isInitialized) return;

    const element = elementRef.current;
    if (!element) return;

    // Calculate delta for smooth transition
    const deltaX = targetPosition.x - currentPosition.x;
    const deltaY = targetPosition.y - currentPosition.y;

    // Apply transform without flicker
    element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    setCurrentPosition(targetPosition);

  }, [targetPosition, currentPosition, isInitialized]);

  return (
    <div style={{ position: 'relative', width: 200, height: 200, border: '1px solid #ccc' }}>
      <div
        ref={elementRef}
        style={{
          position: 'absolute',
          width: 20,
          height: 20,
          backgroundColor: '#1890ff',
          borderRadius: '50%',
          transition: 'transform 0.3s ease-out'
        }}
      />
      <p>Target: ({targetPosition.x}, {targetPosition.y})</p>
    </div>
  );
};

// Example with responsive layout
const ResponsiveGrid = ({ columns, gap }: { columns: number; gap: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  // Initial layout setup
  useLayoutEffect(() => {
    console.log('Setting up initial layout');
    updateLayout();
  }, []);

  // Update layout only when props change
  useUpdateLayoutEffect(() => {
    console.log('Updating layout:', { columns, gap });
    updateLayout();
  }, [columns, gap]);

  const updateLayout = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const totalGap = (columns - 1) * gap;
    const availableWidth = containerWidth - totalGap;
    const calculatedWidth = Math.floor(availableWidth / columns);

    setItemWidth(calculatedWidth);

    // Update CSS Grid layout without flicker
    container.style.gridTemplateColumns = `repeat(${columns}, ${calculatedWidth}px)`;
    container.style.gap = `${gap}px`;
  };

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          display: 'grid',
          width: '100%',
          border: '1px solid #ddd',
          padding: '10px'
        }}
      >
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            style={{
              height: 100,
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Item {index + 1}
          </div>
        ))}
      </div>
      <p>Item Width: {itemWidth}px</p>
    </div>
  );
};
```

### Common Use Cases

- **Smooth transitions**: Update positions/animations after initial setup
- **Responsive adjustments**: Modify layout only on prop changes
- **Dynamic styling**: Apply styles without initial flicker
- **Canvas/SVG updates**: Redraw only on data updates
- **Performance optimization**: Skip expensive initial operations

### Performance Considerations

- Combines benefits of useLayoutEffect with update-only execution
- Prevents initial render blocking for complex calculations
- Still blocks browser paint on updates
- Use when initial setup differs from update logic

### Migration Tips

```typescript
// Before
useLayoutEffect(() => {
  if (isInitialized.current) {
    // Update logic
  }
}, [deps]);

// After
useUpdateLayoutEffect(() => {
  // Update logic - no need for isInitialized check
}, [deps]);
```

---

## useTrackedEffect

### English Description
An enhanced `useEffect` that tracks which dependencies changed and provides information about the changes.

### TypeScript Type Definition

```typescript
import { DependencyList } from 'react';

type ChangedDeps = number[];
type TrackedEffectCallback = (
  changes: ChangedDeps,
  previousDeps: any[],
  currentDeps: any[]
) => void | (() => void);

function useTrackedEffect(
  effect: TrackedEffectCallback,
  deps?: DependencyList
): void;
```

### Practical Example

```typescript
import React, { useState } from 'react';
import { useTrackedEffect } from 'ahooks';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    preferences: {
      theme: 'light',
      language: 'en'
    }
  });

  useTrackedEffect((changes, previousDeps, currentDeps) => {
    if (changes.length > 0) {
      console.log('Dependencies changed:');
      changes.forEach(index => {
        const depName = ['user'][index] || `dep_${index}`;
        console.log(`${depName} changed from`, previousDeps[index], 'to', currentDeps[index]);

        // Track specific changes
        if (depName === 'user' && previousDeps[index] && currentDeps[index]) {
          const prev = previousDeps[index];
          const curr = currentDeps[index];

          if (prev.name !== curr.name) {
            console.log('🏷️ Name changed:', prev.name, '->', curr.name);
          }
          if (prev.email !== curr.email) {
            console.log('📧 Email changed:', prev.email, '->', curr.email);
          }
          if (prev.age !== curr.age) {
            console.log('🎂 Age changed:', prev.age, '->', curr.age);
          }
          if (JSON.stringify(prev.preferences) !== JSON.stringify(curr.preferences)) {
            console.log('⚙️ Preferences changed');
          }
        }
      });

      // Send analytics for specific changes
      if (changes.includes(0)) { // user object changed
        analytics.track('user_profile_updated', {
          fields: changes.map(i => ['user'][i]),
          timestamp: Date.now()
        });
      }
    }
  }, [user]);

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={user.age}
            onChange={(e) => setUser(prev => ({ ...prev, age: parseInt(e.target.value) }))}
          />
        </label>
      </div>
      <div>
        <label>
          Theme:
          <select
            value={user.preferences.theme}
            onChange={(e) => setUser(prev => ({
              ...prev,
              preferences: { ...prev.preferences, theme: e.target.value }
            }))}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
    </div>
  );
};

// Analytics helper
const analytics = {
  track: (event: string, data: any) => {
    console.log('Analytics:', event, data);
  }
};

// Example with multiple dependencies
const DataProcessor = ({ filters, sortConfig, selectedItems }) => {
  const [processedData, setProcessedData] = useState([]);

  useTrackedEffect((changes, previousDeps, currentDeps) => {
    if (changes.length > 0) {
      changes.forEach(index => {
        switch (index) {
          case 0: // filters
            console.log('🔍 Filters updated:', currentDeps[index]);
            break;
          case 1: // sortConfig
            console.log('📊 Sort config updated:', currentDeps[index]);
            break;
          case 2: // selectedItems
            console.log('✅ Selection updated:', currentDeps[index]);
            break;
        }
      });

      // Process data based on what changed
      processData(currentDeps[0], currentDeps[1], currentDeps[2]);
    }
  }, [filters, sortConfig, selectedItems]);

  const processData = (filters, sortConfig, selectedItems) => {
    // Data processing logic
    console.log('Processing data with new parameters');
  };

  return (
    <div>
      <h3>Data Processing</h3>
      <p>Check console for change tracking</p>
    </div>
  );
};
```

### Common Use Cases

- **Debugging effects**: Identify which dependency triggered the effect
- **Performance optimization**: Conditionally run logic based on changed dependencies
- **Analytics and logging**: Track specific state changes
- **Conditional side effects**: Run different logic based on what changed
- **Development tools**: Build better debugging experiences

### Performance Considerations

- Slightly more overhead than regular useEffect
- Useful mainly during development for debugging
- Can be used in production for conditional optimization
- Consider removing in production builds if only used for debugging

### Migration Tips

```typescript
// Before
useEffect(() => {
  console.log('Effect ran, but not sure why');
}, [deps]);

// After
useTrackedEffect((changes, prev, curr) => {
  console.log('Effect triggered by:', changes);
}, [deps]);
```

---

## useWhyDidYouUpdate

### English Description
A debugging hook that helps identify which props or state changes caused a component to re-render.

### TypeScript Type Definition

```typescript
type Props = Record<string, any>;

function useWhyDidYouUpdate(
  componentName: string,
  props: Props
): void;
```

### Practical Example

```typescript
import React, { useState, memo } from 'react';
import { useWhyDidYouUpdate } from 'ahooks';

const UserProfile = memo(({ user, settings, onUpdate }: {
  user: { id: number; name: string; email: string };
  settings: { theme: string; notifications: boolean };
  onUpdate: (updates: any) => void;
}) => {
  // Debug hook to track why this component re-renders
  useWhyDidYouUpdate('UserProfile', {
    user,
    settings,
    onUpdate
  });

  console.log('UserProfile rendered');

  return (
    <div className="user-profile">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Theme: {settings.theme}</p>
      <p>Notifications: {settings.notifications ? 'On' : 'Off'}</p>
      <button onClick={() => onUpdate({
        user: { ...user, name: user.name + ' (Updated)' }
      })}>
        Update Name
      </button>
    </div>
  );
});

// Parent component that uses UserProfile
const App = () => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  });

  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true
  });

  const [counter, setCounter] = useState(0);

  // This function will cause UserProfile to re-render
  // useWhyDidYouUpdate will help us identify why
  const handleUpdate = (updates: any) => {
    if (updates.user) {
      setUser(updates.user);
    }
  };

  return (
    <div>
      <h2>User Management</h2>

      <UserProfile
        user={user}
        settings={settings}
        onUpdate={handleUpdate}
      />

      <div style={{ marginTop: '20px' }}>
        <h3>Controls</h3>
        <button onClick={() => setSettings(prev => ({
          ...prev,
          theme: prev.theme === 'light' ? 'dark' : 'light'
        }))}>
          Toggle Theme
        </button>

        <button onClick={() => setSettings(prev => ({
          ...prev,
          notifications: !prev.notifications
        }))}>
          Toggle Notifications
        </button>

        <button onClick={() => setCounter(prev => prev + 1)}>
          Counter: {counter}
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h4>Current State</h4>
        <pre>{JSON.stringify({ user, settings, counter }, null, 2)}</pre>
      </div>
    </div>
  );
};

// Example with complex component
const ComplexComponent = memo(({
  data,
  filters,
  pagination,
  actions
}: {
  data: Array<{ id: number; name: string }>;
  filters: { search: string; category: string };
  pagination: { page: number; limit: number };
  actions: { onEdit: (id: number) => void; onDelete: (id: number) => void };
}) => {
  useWhyDidYouUpdate('ComplexComponent', {
    data,
    filters,
    pagination,
    actions
  });

  return (
    <div>
      <h3>Complex Component</h3>
      <p>Data items: {data.length}</p>
      <p>Current page: {pagination.page}</p>
      <p>Search: {filters.search}</p>
    </div>
  );
});

// Optimized version with stable function references
const OptimizedApp = () => {
  const [user, setUser] = useState({ id: 1, name: 'John', email: 'john@example.com' });
  const [settings, setSettings] = useState({ theme: 'light', notifications: true });

  // Stable function reference to prevent unnecessary re-renders
  const handleUpdate = React.useCallback((updates: any) => {
    if (updates.user) {
      setUser(updates.user);
    }
  }, []);

  return (
    <UserProfile
      user={user}
      settings={settings}
      onUpdate={handleUpdate}
    />
  );
};
```

### Common Use Cases

- **Performance debugging**: Identify unnecessary re-renders
- **React.memo optimization**: Verify memoization is working
- **Function reference debugging**: Check if inline functions cause re-renders
- **Object dependency tracking**: Monitor complex object changes
- **Component optimization**: Find optimization opportunities

### Performance Considerations

- Development-only hook - remove in production
- Helps identify performance bottlenecks
- Can be combined with React DevTools Profiler
- Leads to better component optimization

### Migration Tips

```typescript
// Before debugging
const MyComponent = ({ prop1, prop2 }) => {
  // Component logic
};

// During debugging
const MyComponent = ({ prop1, prop2 }) => {
  useWhyDidYouUpdate('MyComponent', { prop1, prop2 });
  // Component logic
};

// After optimization
const MyComponent = memo(({ prop1, prop2 }) => {
  // Optimized component logic
});
```

---

## General Best Practices

### When to Use Each Hook

1. **useMount**: One-time setup operations
   - **Use cases**: One-time setup operations
   - **Avoid**: Heavy computations that block initial render

2. **useUnmount**: Cleanup operations
   - **Use cases**: Cleanup operations
   - **Remember**: Always cleanup async operations

3. **useUpdateEffect**: Skip initial execution
   - **Use cases**: Skip initial execution
   - **For**: Form validation, search triggers

4. **useAsyncEffect**: Async operations with cleanup
   - **Use cases**: Async operations requiring cleanup
   - **Advantage**: Automatic cancellation support

5. **useDeepCompareEffect**: Complex dependencies
   - **Use cases**: Complex dependencies
   - **Note**: Performance overhead

6. **useDeepCompareLayoutEffect**: Synchronous DOM operations
   - **Use cases**: Synchronous DOM operations
   - **Caution**: Blocks browser paint

7. **useUpdateLayoutEffect**: Skip initial sync execution
   - **Use cases**: Skip initial sync execution
   - **For**: Smooth transitions

8. **useTrackedEffect**: Debugging and optimization
   - **Use cases**: Debugging and optimization
   - **Development**: Development tool

9. **useWhyDidYouUpdate**: Performance debugging
   - **Use cases**: Performance debugging
   - **Remove**: Remove in production

### Performance Optimization Tips

1. **Use appropriate dependencies**: Minimize dependency array size
2. **Memoize expensive operations**: Use useMemo/useCallback
3. **Avoid deep comparisons when possible**: Prefer shallow comparisons
4. **Use layout effects sparingly**: They block browser paint
5. **Clean up properly**: Prevent memory leaks
6. **Remove debugging hooks in production**: useWhyDidYouUpdate, useTrackedEffect

### Common Pitfalls

1. **Missing dependencies**: Always include all used variables
2. **Over-comparison**: Don't use deep comparison for simple values
3. **Memory leaks**: Always cleanup async operations
4. **Infinite loops**: Be careful with dependency arrays
5. **Performance**: Don't over-optimize prematurely

### TypeScript Integration

```typescript
// Strongly typed hooks
interface User {
  id: number;
  name: string;
  email: string;
}

interface Settings {
  theme: 'light' | 'dark';
  notifications: boolean;
}

const UserComponent = ({ user, settings }: {
  user: User;
  settings: Settings;
}) => {
  useMount(() => {
    // TypeScript infers types correctly
    console.log(`User: ${user.name}, Theme: ${settings.theme}`);
  });

  useDeepCompareEffect(() => {
    // Deep comparison with type safety
    applySettings(settings);
  }, [settings]); // Fully typed

  return <div>{user.name}</div>;
};
```

---

## Conclusion

The ahooks lifecycle hooks provide powerful enhancements to React's built-in effect hooks, offering:

- **Better developer experience**: More intuitive and safer abstractions
- **Performance optimizations**: Smart comparison and execution control
- **Debugging capabilities**: Enhanced visibility into effect triggers
- **Type safety**: Full TypeScript support
- **Production-ready**: Thoroughly tested and optimized

Choose the right hook based on your specific use case and always consider the performance implications of your choices.