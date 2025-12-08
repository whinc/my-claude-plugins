# ahooks - React Hooks Library

ahooks is a high-quality & reliable React Hooks library with 80+ hooks covering various scenarios. This skill provides comprehensive documentation for all ahooks hooks organized by category.

## When to Use This Skill

Use this skill when:
- Working with the ahooks library in React projects
- Need to find the right hook for a specific use case
- Want to understand hook APIs, parameters, and return values
- Looking for React hooks patterns and best practices
- Need examples of hook usage

## Library Overview

ahooks provides hooks for:
- **State Management**: Boolean, counter, toggle, map, set, list management
- **Effects**: Lifecycle, debounce, throttle, deep compare effects
- **Async Operations**: Request management, pagination, infinite scroll
- **DOM/UI**: Event listeners, click away, drag & drop, fullscreen, hover
- **Browser APIs**: Storage, cookies, network, document visibility
- **Performance**: Memoization, creation optimization, RAF-based operations
- **Timers**: Intervals, timeouts, countdowns
- **Advanced**: Reactive state, controllable values, event emitters

---

## State Management Hooks

### useBoolean
Elegantly manage boolean state.

**API:**
```typescript
const [state, { toggle, set, setTrue, setFalse }] = useBoolean(defaultValue?: boolean);
```

**Parameters:**
- `defaultValue` (boolean, default: `false`): Initial value

**Returns:**
- `state` (boolean): Current value
- `toggle` (() => void): Toggle state
- `set` ((value: boolean) => void): Set state
- `setTrue` (() => void): Set state to true
- `setFalse` (() => void): Set state to false

**Example:**
```tsx
const [state, { toggle, setTrue, setFalse }] = useBoolean(false);

<button onClick={toggle}>Toggle: {state}</button>
<button onClick={setTrue}>Set True</button>
<button onClick={setFalse}>Set False</button>
```

---

### useToggle
Toggle between two states.

**API:**
```typescript
const [state, { toggle, set, setLeft, setRight }] = useToggle(
  defaultValue?: boolean,
);
const [state, { toggle, set, setLeft, setRight }] = useToggle<T>(
  defaultValue: T,
  reverseValue: T,
);
```

**Returns:**
- `state`: Current value
- `toggle`: Toggle between left and right
- `set`: Set state
- `setLeft`: Set to left value
- `setRight`: Set to right value

---

### useCounter
Manage counter with increment, decrement, set, and reset operations.

**API:**
```typescript
const [current, { inc, dec, set, reset }] = useCounter(
  initialValue?: number,
  { min?: number, max?: number }
);
```

**Parameters:**
- `initialValue` (number, default: 0): Initial count
- `min` (number): Minimum value
- `max` (number): Maximum value

**Returns:**
- `current` (number): Current value
- `inc` ((delta?: number) => void): Increment (default delta: 1)
- `dec` ((delta?: number) => void): Decrement (default delta: 1)
- `set` ((value: number | ((c: number) => number)) => void): Set value
- `reset` (() => void): Reset to initial value

---

### useMap
Manage Map state.

**API:**
```typescript
const [map, { set, setAll, remove, reset, get }] = useMap<K, V>(initialValue?);
```

**Returns:**
- `map` (Map<K, V>): Map object
- `set` ((key: K, value: V) => void): Add item
- `get` ((key: K) => V | undefined): Get item
- `setAll` ((newMap: Iterable<[K, V]>) => void): Set new Map
- `remove` ((key: K) => void): Remove key
- `reset` (() => void): Reset to default

---

### useSet
Manage Set state.

**API:**
```typescript
const [set, { add, remove, reset, has }] = useSet<T>(initialValue?);
```

**Returns:**
- `set` (Set<T>): Set object
- `add` ((key: T) => void): Add item
- `remove` ((key: T) => void): Remove item
- `reset` (() => void): Reset to default
- `has` ((key: T) => boolean): Check if item exists

---

### useSetState
Manage state like class component's setState.

**API:**
```typescript
const [state, setState] = useSetState<T>(initialState);
```

setState can accept object or function that returns object. It will merge new state with old state.

---

### useDynamicList
Manage dynamic list with unique keys for each item.

**API:**
```typescript
const { 
  list, resetList, insert, merge, replace, remove, 
  move, getKey, getIndex, sortList, push, pop, unshift, shift 
} = useDynamicList<T>(initialValue: T[]);
```

**Returns:**
- `list` (T[]): Current list
- `resetList` ((list: T[]) => void): Reset list
- `insert` ((index: number, item: T) => void): Add item at position
- `merge` ((index: number, items: T[]) => void): Merge items at position
- `replace` ((index: number, item: T) => void): Replace item at position
- `remove` ((index: number) => void): Delete item
- `move` ((oldIndex: number, newIndex: number) => void): Move item
- `getKey` ((index: number) => number): Get UUID of item
- `getIndex` ((key: number) => number): Get index from UUID
- `push`, `pop`, `unshift`, `shift`: Array methods

---

### useReactive
Provides data reactivity - modifying properties automatically rerenders view.

**API:**
```typescript
const state = useReactive<T>(initialValue: Record<string, any>);
```

**Note:** Not compatible with Map or Set.

**Example:**
```tsx
const state = useReactive({ count: 0, name: 'John' });

// Direct mutation triggers rerender
<button onClick={() => state.count++}>Increment</button>
```

---

### useGetState
Add a getter method to useState to get the latest value.

**API:**
```typescript
const [state, setState, getState] = useGetState<S>(initialState);
```

Useful in async callbacks where you need the latest state value.

---

### useResetState
Add reset method to useState.

**API:**
```typescript
const [state, setState, resetState] = useResetState<S>(initialState);
```

---

### useSafeState
Safe version of useState that prevents setState on unmounted component.

**API:**
```typescript
const [state, setState] = useSafeState<S>(initialState);
```

---

### usePrevious
Return the previous state.

**API:**
```typescript
const previousState = usePrevious<T>(
  state: T,
  shouldUpdate?: (prev: T | undefined, next: T) => boolean
);
```

**Parameters:**
- `state` (T): State to track
- `shouldUpdate` ((prev, next) => boolean): Custom update condition (default: `!Object.is(a, b)`)

---

### useHistoryTravel
Manage state change history with undo/redo functionality.

**API:**
```typescript
const {
  value, setValue, backLength, forwardLength,
  go, back, forward, reset
} = useHistoryTravel<T>(initialValue?: T, maxLength?: number);
```

**Parameters:**
- `initialValue` (T): Initial value
- `maxLength` (number, default: 0 unlimited): Max history length

**Returns:**
- `value` (T): Current value
- `setValue` ((value: T) => void): Set value
- `backLength` (number): Backward history length
- `forwardLength` (number): Forward history length
- `go` ((step: number) => void): Move in history (negative = back, positive = forward)
- `back` (() => void): Move one step backward
- `forward` (() => void): Move one step forward
- `reset` ((newInitialValue?: T) => void): Reset history

---

## Effect Hooks

### useMount
Execute function after component is mounted.

**API:**
```typescript
useMount(fn: EffectCallback);
```

---

### useUnmount
Execute function before component unmounts.

**API:**
```typescript
useUnmount(fn: () => void);
```

---

### useUpdateEffect
useEffect that ignores first render (only runs on updates).

**API:**
```typescript
useUpdateEffect(effect: EffectCallback, deps?: DependencyList);
```

---

### useUpdateLayoutEffect
useLayoutEffect that ignores first render.

**API:**
```typescript
useUpdateLayoutEffect(effect: EffectCallback, deps?: DependencyList);
```

---

### useAsyncEffect
useEffect that supports async functions.

**API:**
```typescript
useAsyncEffect(
  effect: () => AsyncGenerator | Promise,
  deps: DependencyList
);
```

**Example:**
```tsx
useAsyncEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []);
```

---

### useDebounceEffect
Debounced useEffect.

**API:**
```typescript
useDebounceEffect(
  effect: EffectCallback,
  deps?: DependencyList,
  options?: {
    wait?: number;        // default: 1000
    leading?: boolean;    // default: false
    trailing?: boolean;   // default: true
    maxWait?: number;
  }
);
```

---

### useThrottleEffect
Throttled useEffect.

**API:**
```typescript
useThrottleEffect(
  effect: EffectCallback,
  deps?: DependencyList,
  options?: {
    wait?: number;        // default: 1000
    leading?: boolean;    // default: true
    trailing?: boolean;   // default: true
  }
);
```

---

### useDeepCompareEffect
useEffect with deep comparison of deps using react-fast-compare.

**API:**
```typescript
useDeepCompareEffect(
  effect: React.EffectCallback,
  deps: React.DependencyList
);
```

---

### useDeepCompareLayoutEffect
useLayoutEffect with deep comparison of deps.

**API:**
```typescript
useDeepCompareLayoutEffect(
  effect: React.EffectCallback,
  deps: React.DependencyList
);
```

---

### useTrackedEffect
Track which dependency triggered effect execution.

**API:**
```typescript
useTrackedEffect(
  effect: (changes: number[], previousDeps: any[], currentDeps: any[]) => void,
  deps: DependencyList
);
```

---

### useIsomorphicLayoutEffect
useLayoutEffect for browser, useEffect for SSR (avoids SSR warnings).

**API:**
```typescript
useIsomorphicLayoutEffect(effect: EffectCallback, deps?: DependencyList);
```

---

### useWhyDidYouUpdate
Debug tool to see which props caused component to update.

**API:**
```typescript
useWhyDidYouUpdate(componentName: string, props: Record<string, any>);
```

---

## Async & Data Fetching Hooks

### useRequest
Powerful async data management hook with many features.

**API:**
```typescript
const {
  data, error, loading, run, runAsync, refresh, 
  refreshAsync, mutate, cancel
} = useRequest(
  service: (...args: any[]) => Promise<any>,
  options?: {
    manual?: boolean;
    defaultParams?: any[];
    onBefore?: () => void;
    onSuccess?: (data, params) => void;
    onError?: (error, params) => void;
    onFinally?: (params, data, error) => void;
    // ... many more options
  }
);
```

**Key Options:**
- `manual` (boolean, default: false): Don't auto-execute
- `defaultParams` (any[]): Default parameters
- `loadingDelay` (number): Delay loading state
- `pollingInterval` (number): Polling interval
- `pollingWhenHidden` (boolean): Poll when page hidden
- `refreshDeps` (any[]): Auto refresh when deps change
- `ready` (boolean): Ready to execute
- `debounceWait` (number): Debounce wait time
- `throttleWait` (number): Throttle wait time
- `cacheKey` (string): Cache key
- `cacheTime` (number): Cache time
- `staleTime` (number): Stale time
- `retryCount` (number): Retry count
- `retryInterval` (number): Retry interval

**Returns:**
- `data`: Response data
- `error`: Error object
- `loading`: Loading state
- `run`: Execute manually (auto catch errors)
- `runAsync`: Execute manually (returns Promise)
- `refresh`: Refresh with last params
- `mutate`: Mutate data directly
- `cancel`: Cancel request

---

### usePagination
Pagination management based on useRequest.

**API:**
```typescript
const {
  data, loading, pagination, run, refresh, mutate
} = usePagination<TData, TParams>(
  service: ({ current, pageSize }) => Promise<{ total: number, list: any[] }>,
  options?: {
    defaultPageSize?: number;  // default: 10
    defaultCurrent?: number;   // default: 1
    refreshDeps?: any[];
  }
);
```

**Service Requirements:**
- Input: `{ current: number, pageSize: number, ...rest }`
- Output: `{ total: number, list: any[] }`

**Returns:**
- `pagination.current`: Current page
- `pagination.pageSize`: Page size
- `pagination.total`: Total items
- `pagination.totalPage`: Total pages
- `pagination.onChange`: Change page/size
- `pagination.changeCurrent`: Change page
- `pagination.changePageSize`: Change size

---

### useInfiniteScroll
Infinite scroll/load more functionality.

**API:**
```typescript
const {
  data, loading, loadingMore, noMore, 
  loadMore, loadMoreAsync, reload, mutate, cancel
} = useInfiniteScroll<TData>(
  service: (currentData?: TData) => Promise<{ list: any[], ...rest }>,
  options?: {
    target?: Target;           // Scroll container
    isNoMore?: (data) => boolean;
    threshold?: number;        // default: 100px
    direction?: 'top' | 'bottom'; // default: 'bottom'
    manual?: boolean;
    reloadDeps?: any[];
  }
);
```

**Service Requirements:**
- Input: Latest merged data
- Output: Must contain `list` array

---

### useAntdTable
Ant Design Table and Form integration.

**API:**
```typescript
const {
  tableProps, search, loading, run, refresh
} = useAntdTable<TData, TParams>(
  service: (
    { current, pageSize, sorter, filters }, 
    formData
  ) => Promise<{ total: number, list: any[] }>,
  options?: {
    form?: FormInstance;
    defaultType?: 'simple' | 'advance';
    defaultParams?: [pagination, formData];
    defaultPageSize?: number;
    refreshDeps?: any[];
  }
);
```

**Returns:**
- `tableProps`: Props for Table component
  - `dataSource`, `loading`, `onChange`, `pagination`
- `search`: Form controls
  - `type`, `changeType`, `submit`, `reset`

**Usage:**
```tsx
<Form form={form}>...</Form>
<Table columns={columns} rowKey="id" {...tableProps} />
```

---

### useFusionTable
Fusion Design Table and Form integration (similar to useAntdTable).

**API:**
```typescript
const {
  tableProps, paginationProps, search
} = useFusionTable<TData, TParams>(service, options);
```

---

## DOM & UI Hooks

### useEventListener
Elegant addEventListener wrapper.

**API:**
```typescript
useEventListener(
  eventName: string | string[],
  handler: (ev: Event) => void,
  options?: {
    target?: Target;      // default: window
    capture?: boolean;    // default: false
    once?: boolean;       // default: false
    passive?: boolean;    // default: false
    enable?: boolean;     // default: true
  }
);
```

**Example:**
```tsx
useEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Multiple events
useEventListener(['mouseenter', 'mouseleave'], handler, { target: ref });
```

---

### useClickAway
Listen for clicks outside target element.

**API:**
```typescript
useClickAway<T extends Event = Event>(
  onClickAway: (event: T) => void,
  target: Target | Target[],
  eventName?: string | string[]  // default: 'click'
);
```

**Example:**
```tsx
const ref = useRef();
useClickAway(() => setVisible(false), ref);

<div ref={ref}>Modal content</div>
```

---

### useHover
Track if element is being hovered.

**API:**
```typescript
const isHovering = useHover(
  target: Target,
  options?: {
    onEnter?: () => void;
    onLeave?: () => void;
    onChange?: (isHovering: boolean) => void;
  }
);
```

---

### useFocusWithin
Monitor if focus is within an area (CSS :focus-within).

**API:**
```typescript
const isFocusWithin = useFocusWithin(
  target: Target,
  options?: {
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onChange?: (isFocusWithin: boolean) => void;
  }
);
```

---

### useKeyPress
Listen for keyboard press with key combinations and aliases.

**API:**
```typescript
useKeyPress(
  keyFilter: KeyType | KeyType[] | ((event: KeyboardEvent) => boolean),
  eventHandler: (event: KeyboardEvent, key: KeyType) => void,
  options?: {
    events?: ('keydown' | 'keyup')[];  // default: ['keydown']
    target?: Target;
    exactMatch?: boolean;  // default: false
    useCapture?: boolean;  // default: false
  }
);
```

**Example:**
```tsx
// Single key
useKeyPress('Enter', () => submit());

// Combination
useKeyPress(['ctrl.s', 'meta.s'], (e) => {
  e.preventDefault();
  save();
});

// Multiple keys
useKeyPress(['up', 'down'], (e, key) => {
  if (key === 'up') moveUp();
  if (key === 'down') moveDown();
});

// Custom function
useKeyPress((e) => e.key === 'Enter' && e.shiftKey, send);
```

**Modifier Keys:** ctrl, alt, shift, meta

---

### useLongPress
Listen for long press events.

**API:**
```typescript
useLongPress(
  onLongPress: (event: MouseEvent | TouchEvent) => void,
  target: Target,
  options?: {
    delay?: number;                    // default: 300
    moveThreshold?: { x?: number; y?: number };
    onClick?: (event) => void;
    onLongPressEnd?: (event) => void;
  }
);
```

---

### useDrop & useDrag
Drag and drop data transfer.

**useDrag API:**
```typescript
useDrag<T>(
  data: any,
  target: Target,
  options?: {
    onDragStart?: (e: React.DragEvent) => void;
    onDragEnd?: (e: React.DragEvent) => void;
    dragImage?: {
      image: string | Element;
      offsetX?: number;  // default: 0
      offsetY?: number;  // default: 0
    };
  }
);
```

**useDrop API:**
```typescript
useDrop<T>(
  target: Target,
  options?: {
    onText?: (text: string, e: React.DragEvent) => void;
    onFiles?: (files: File[], e: React.DragEvent) => void;
    onUri?: (uri: string, e: React.DragEvent) => void;
    onDom?: (content: any, e: React.DragEvent) => void;
    onDrop?: (e: React.DragEvent) => void;
    onPaste?: (e: React.DragEvent) => void;
    onDragEnter?: (e: React.DragEvent) => void;
    onDragOver?: (e: React.DragEvent) => void;
    onDragLeave?: (e: React.DragEvent) => void;
  }
);
```

---

### useFullscreen
Manage DOM fullscreen.

**API:**
```typescript
const [isFullscreen, { 
  enterFullscreen, exitFullscreen, toggleFullscreen, isEnabled 
}] = useFullscreen(
  target: Target,
  options?: {
    onEnter?: () => void;
    onExit?: () => void;
    pageFullscreen?: boolean | { className?: string, zIndex?: number };
  }
);
```

---

### useSize
Track element size changes.

**API:**
```typescript
const size = useSize(target: Target);
// Returns: { width: number, height: number } | undefined
```

---

### useScroll
Track element scroll position.

**API:**
```typescript
const scroll = useScroll(target?: Target);
// Returns: { left: number, top: number } | undefined
```

---

### useMouse
Track cursor position.

**API:**
```typescript
const {
  screenX, screenY, clientX, clientY, pageX, pageY,
  elementX, elementY, elementH, elementW, elementPosX, elementPosY
} = useMouse(target?: Target);
```

---

### useInViewport
Observe if element is in viewport (Intersection Observer API).

**API:**
```typescript
const [inViewport, ratio] = useInViewport(
  target: Target | Target[],
  options?: {
    threshold?: number | number[];
    rootMargin?: string;
    root?: Target;
    callback?: (entry: IntersectionObserverEntry) => void;
  }
);
```

---

### useMutationObserver
Watch for DOM tree changes (MutationObserver API).

**API:**
```typescript
useMutationObserver(
  callback: MutationCallback,
  target: Target,
  options?: MutationObserverInit
);
```

---

### useVirtualList
Virtual list for large datasets.

**API:**
```typescript
const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
  originalList: any[],
  options?: {
    containerTarget?: Target;
    wrapperTarget?: Target;
    itemHeight: number | ((index: number) => number);
    overscan?: number;  // default: 5
  }
);
```

---

### useTextSelection
Get user's text selection.

**API:**
```typescript
const selection = useTextSelection(target?: Target);
```

---

### useExternal
Dynamically load external JS/CSS.

**API:**
```typescript
const status = useExternal(
  path: string,
  options?: {
    type?: 'js' | 'css';
    js?: HTMLScriptElement;
    css?: HTMLStyleElement;
    keepWhenUnused?: boolean;  // default: false
  }
);
// Status: 'unset' | 'loading' | 'ready' | 'error'
```

---

### useFavicon
Set page favicon.

**API:**
```typescript
useFavicon(href: string);
```

**Note:** Doesn't work in Safari (intentional limitation).

---

### useTitle
Set page title.

**API:**
```typescript
useTitle(title: string, options?: { restoreOnUnmount?: boolean });
```

---

### useResponsive
Get responsive breakpoints.

**API:**
```typescript
const responsive = useResponsive();
// Returns: { xs, sm, md, lg, xl, xxl }
```

---

### useDocumentVisibility
Track page visibility (visibilityState API).

**API:**
```typescript
const documentVisibility = useDocumentVisibility();
// Returns: 'visible' | 'hidden' | 'prerender' | undefined
```

---

## Browser Storage Hooks

### useLocalStorageState
Store state in localStorage.

**API:**
```typescript
const [state, setState] = useLocalStorageState<T>(
  key: string,
  options?: {
    defaultValue?: T | (() => T);
    listenStorageChange?: boolean;  // default: false
    serializer?: (value: T) => string;      // default: JSON.stringify
    deserializer?: (value: string) => T;    // default: JSON.parse
    onError?: (error: unknown) => void;
  }
);
```

**Note:** Use `setState()` or `setState(undefined)` to delete from localStorage.

---

### useSessionStorageState
Store state in sessionStorage (same API as useLocalStorageState).

**API:**
```typescript
const [state, setState] = useSessionStorageState<T>(key, options);
```

---

### useCookieState
Store state in cookies.

**API:**
```typescript
const [state, setState] = useCookieState(
  cookieKey: string,
  options?: {
    defaultValue?: string | (() => string);
    expires?: number | Date;
    path?: string;          // default: '/'
    domain?: string;
    secure?: boolean;       // default: false
    sameSite?: 'strict' | 'lax' | 'none';
  }
);
```

---

## Performance Hooks

### useMemoizedFn
Persistent function (alternative to useCallback with auto-deps).

**API:**
```typescript
const memoizedFn = useMemoizedFn<T>(fn: T): T;
```

**Benefits:**
- Function reference never changes
- No need to specify deps
- Always accesses latest state/props

**Example:**
```tsx
const [count, setCount] = useState(0);

// Function reference never changes, always accesses latest count
const handleClick = useMemoizedFn(() => {
  console.log(count);
});
```

**Note:** Returned function doesn't inherit properties from original function.

---

### useCreation
Guaranteed memo (replacement for useMemo/useRef).

**API:**
```typescript
const value = useCreation<T>(factory: () => T, deps: any[]): T;
```

Unlike useMemo, useCreation guarantees the memoized value won't be recalculated.

**Example:**
```tsx
// Bad: Subject created on every render
const a = useRef(new Subject());

// Good: Subject only created once
const b = useCreation(() => new Subject(), []);
```

---

### useLatest
Get latest value (avoids closure issues).

**API:**
```typescript
const latestValueRef = useLatest<T>(value: T): MutableRefObject<T>;
```

---

### useDebounce
Debounced value.

**API:**
```typescript
const debouncedValue = useDebounce(
  value: any,
  options?: {
    wait?: number;        // default: 1000
    leading?: boolean;    // default: false
    trailing?: boolean;   // default: true
    maxWait?: number;
  }
);
```

---

### useDebounceFn
Debounced function.

**API:**
```typescript
const { run, cancel, flush } = useDebounceFn(
  fn: (...args: any[]) => any,
  options?: {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
  }
);
```

---

### useThrottle
Throttled value.

**API:**
```typescript
const throttledValue = useThrottle(
  value: any,
  options?: {
    wait?: number;        // default: 1000
    leading?: boolean;    // default: true
    trailing?: boolean;   // default: true
  }
);
```

---

### useThrottleFn
Throttled function.

**API:**
```typescript
const { run, cancel, flush } = useThrottleFn(
  fn: (...args: any[]) => any,
  options?: {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
  }
);
```

---

### useLockFn
Add lock to async function to prevent parallel executions.

**API:**
```typescript
const lockedFn = useLockFn<P, V>(
  fn: (...args: P[]) => Promise<V>
): (...args: P[]) => Promise<V | undefined>;
```

---

### useRafState
Update state in requestAnimationFrame callback.

**API:**
```typescript
const [state, setState] = useRafState<S>(initialState);
```

---

## Timer Hooks

### useInterval
Handle setInterval timer.

**API:**
```typescript
const clearInterval = useInterval(
  fn: () => void,
  delay?: number | undefined,
  options?: {
    immediate?: boolean;  // default: false
  }
);
```

---

### useTimeout
Handle setTimeout timer.

**API:**
```typescript
const clearTimeout = useTimeout(
  fn: () => void,
  delay?: number | undefined
);
```

---

### useRafInterval
requestAnimationFrame-based interval (better performance).

**API:**
```typescript
const clearInterval = useRafInterval(
  fn: () => void,
  delay?: number | undefined,
  options?: {
    immediate?: boolean;
  }
);
```

**Note:** Automatically downgrades to setInterval in Node.js.

---

### useRafTimeout
requestAnimationFrame-based timeout.

**API:**
```typescript
const clearTimeout = useRafTimeout(
  fn: () => void,
  delay?: number | undefined
);
```

---

### useCountDown
Countdown timer.

**API:**
```typescript
const [countdown, formattedRes] = useCountDown({
  leftTime?: number;        // milliseconds
  targetDate?: TDate;       // Date | number | string
  interval?: number;        // default: 1000
  onEnd?: () => void;
});
```

**Returns:**
- `countdown` (number): Remaining milliseconds
- `formattedRes`: 
  - `days`, `hours`, `minutes`, `seconds`, `milliseconds`

**Note:** If both leftTime and targetDate provided, leftTime takes priority.

---

## Network & WebSocket Hooks

### useNetwork
Track network connection state.

**API:**
```typescript
const {
  online, since, rtt, type, downlink, 
  saveData, downlinkMax, effectiveType
} = useNetwork();
```

**Properties:**
- `online` (boolean): Connected to network
- `since` (Date): Latest update time
- `rtt` (number): Round-trip time in ms
- `type`: 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown'
- `downlink` (number): Bandwidth in Mbps
- `effectiveType`: 'slow-2g' | '2g' | '3g' | '4g'

---

### useWebSocket
WebSocket hook with auto-reconnect.

**API:**
```typescript
const {
  latestMessage, sendMessage, disconnect, connect, 
  readyState, webSocketIns
} = useWebSocket(
  socketUrl: string,
  options?: {
    reconnectLimit?: number;
    reconnectInterval?: number;
    manual?: boolean;
    onOpen?: (event: WebSocketEventMap['open'], instance) => void;
    onClose?: (event: WebSocketEventMap['close'], instance) => void;
    onMessage?: (message: WebSocketEventMap['message'], instance) => void;
    onError?: (event: WebSocketEventMap['error'], instance) => void;
    protocols?: string | string[];
  }
);
```

---

## Advanced Hooks

### useControllableValue
Manage both controlled and uncontrolled component state.

**API:**
```typescript
const [state, setState] = useControllableValue<T>(
  props: Record<string, any>,
  options?: {
    defaultValue?: T;
    defaultValuePropName?: string;  // default: 'defaultValue'
    valuePropName?: string;         // default: 'value'
    trigger?: string;               // default: 'onChange'
  }
);
```

**Example:**
```tsx
// Can be used as controlled or uncontrolled
function Input(props) {
  const [value, setValue] = useControllableValue(props);
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// Controlled: <Input value={val} onChange={setVal} />
// Uncontrolled: <Input defaultValue="hello" />
```

---

### useEventEmitter
Event emitter for component communication.

**API:**
```typescript
const event$ = useEventEmitter<T>();

// Emit event
event$.emit(value: T);

// Subscribe
event$.useSubscription((value: T) => {
  console.log(value);
});
```

---

### useEventTarget
Form control wrapper with onChange and value logic.

**API:**
```typescript
const [value, { onChange, reset }] = useEventTarget<T, U>({
  initialValue?: T;
  transformer?: (value: U) => T;
});
```

---

### useSelections
Manage selection state.

**API:**
```typescript
const {
  selected, isSelected, select, unSelect, toggle,
  selectAll, unSelectAll, toggleAll, allSelected,
  noneSelected, partiallySelected, setSelected
} = useSelections<T>(items: T[], defaultSelected?: T[]);
```

---

## Best Practices

### 1. Choose the Right Hook
- Use `useMemoizedFn` instead of `useCallback` for functions
- Use `useCreation` instead of `useMemo` for guaranteed memoization
- Use `useLatest` to avoid closure issues in async callbacks
- Use `useRequest` for data fetching with built-in loading/error states

### 2. Performance Optimization
- Use `useDebounce`/`useThrottle` for expensive operations
- Use `useRafState` for animation-related state updates
- Use `useVirtualList` for large lists
- Use RAF-based timers (`useRafInterval`, `useRafTimeout`) for better performance

### 3. State Management
- Use `useReactive` for simple object state without useState
- Use `useControllableValue` for components that support both controlled/uncontrolled
- Use `useSetState` for class-like setState behavior
- Use `useSafeState` to prevent setState on unmounted components

### 4. Effects
- Use `useMount`/`useUnmount` for lifecycle events
- Use `useUpdateEffect` when you need to skip first render
- Use `useDebounceEffect`/`useThrottleEffect` for expensive effects
- Use `useDeepCompareEffect` when comparing complex objects

### 5. Error Handling
- Always handle errors in `useRequest` with `onError` or `runAsync().catch()`
- Use `useLockFn` to prevent race conditions in async operations
- Use `useSafeState` to prevent memory leaks

### 6. Type Safety
- Always provide generic types for better TypeScript support
- Example: `useRequest<UserData, [string]>(service)`

---

## Common Patterns

### Form with Auto-save
```tsx
const [form] = Form.useForm();
const { run: saveForm } = useRequest(saveAPI, {
  manual: true,
  debounceWait: 500,
  onSuccess: () => message.success('Saved')
});

useDebounceEffect(() => {
  const values = form.getFieldsValue();
  saveForm(values);
}, [form], { wait: 500 });
```

### Infinite Scroll List
```tsx
const { data, loading, loadingMore, loadMore, noMore } = useInfiniteScroll(
  (d) => fetchList({ page: d?.page + 1 || 1 }),
  {
    target: containerRef,
    isNoMore: (d) => d?.page >= d?.totalPages,
  }
);
```

### Debounced Search
```tsx
const [keyword, setKeyword] = useState('');
const debouncedKeyword = useDebounce(keyword, { wait: 500 });

const { data, loading } = useRequest(
  () => searchAPI(debouncedKeyword),
  { refreshDeps: [debouncedKeyword] }
);
```

### Pagination with Filters
```tsx
const [filters, setFilters] = useState({});

const { data, loading, pagination } = usePagination(
  ({ current, pageSize }) => getList({ current, pageSize, ...filters }),
  { refreshDeps: [filters] }
);
```

### Click Outside Modal
```tsx
const modalRef = useRef();
const [visible, setVisible] = useState(false);

useClickAway(() => setVisible(false), modalRef);

{visible && <div ref={modalRef}>Modal</div>}
```

---

## Installation

```bash
npm install ahooks
# or
yarn add ahooks
# or
pnpm add ahooks
```

## Import

```tsx
import { useRequest, useBoolean, useDebounceFn } from 'ahooks';
```

---

## Resources

- **Official Documentation**: https://ahooks.js.org/
- **GitHub Repository**: https://github.com/alibaba/hooks
- **NPM Package**: https://www.npmjs.com/package/ahooks

---

## Summary

ahooks provides 80+ production-ready React hooks organized into categories:

1. **State Management** (15+ hooks): Boolean, counter, toggle, map, set, list, reactive state
2. **Effects** (10+ hooks): Mount, unmount, update, async, debounce, throttle, deep compare
3. **Async/Data** (5 hooks): Request, pagination, infinite scroll, table integration
4. **DOM/UI** (20+ hooks): Events, clicks, hover, keyboard, drag/drop, fullscreen, scroll
5. **Storage** (3 hooks): LocalStorage, sessionStorage, cookies
6. **Performance** (10+ hooks): Memoization, debounce, throttle, RAF, lock
7. **Timers** (5 hooks): Interval, timeout, RAF interval/timeout, countdown
8. **Network** (2 hooks): Network state, WebSocket
9. **Advanced** (10+ hooks): Controllable values, event emitters, selections

All hooks are designed for production use with TypeScript support, SSR compatibility, and comprehensive documentation.
