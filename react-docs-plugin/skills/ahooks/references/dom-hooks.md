# DOM, UI, Storage & Browser API Hooks Reference

This comprehensive reference covers 26 essential ahooks for DOM manipulation, UI interactions, storage management, and browser API integrations.

## Table of Contents

- [DOM & UI Hooks](#dom--ui-hooks) (12 hooks)
- [Storage Hooks](#storage-hooks) (4 hooks)
- [Browser API Hooks](#browser-api-hooks) (8 hooks)
- [Timer Hooks](#timer-hooks) (2 hooks)

---

## DOM & UI Hooks

### useEventListener

 A hook for elegantly using addEventListener with automatic cleanup.

```typescript
useEventListener(
  eventName: string,
  handler: (ev: Event) => void,
  options?: Options,
);

interface Options {
  target?: Element | Window | Document | (() => Element) | React.MutableRefObject<Element>;
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
  enable?: boolean;
}
```

**Examples**:

```tsx
// Basic usage
useEventListener('click', (event) => {
  console.log('Window clicked', event);
});

// Listen to keyboard events
useEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// With custom target
const buttonRef = useRef();
useEventListener('mouseenter', () => {
  console.log('Mouse entered button');
}, {
  target: buttonRef,
  passive: true
});

// Multiple events
useEventListener(['mousedown', 'touchstart'], handleStart);
```

**Common Use Cases**:
- Modal close on outside click
- Keyboard shortcuts
- Scroll-based animations
- Touch gesture handling

**Browser Compatibility**: All modern browsers

**Performance Considerations**:
- Use `passive: true` for scroll/touch events to improve performance
- Specify targets precisely to avoid unnecessary listeners

---

### useSize

 A hook for tracking element size changes.

```typescript
const size = useSize(target);

interface Size {
  width: number;
  height: number;
}

type Target = Element | (() => Element) | React.MutableRefObject<Element>;
```

**Examples**:

```tsx
// Responsive container
const containerRef = useRef();
const size = useSize(containerRef);

useEffect(() => {
  if (size.width < 768) {
    setLayout('mobile');
  } else {
    setLayout('desktop');
  }
}, [size]);

// Virtual list container
const listRef = useRef();
const { height } = useSize(listRef);
const itemHeight = 50;
const visibleCount = Math.floor(height / itemHeight);
```

**Common Use Cases**:
- Responsive layouts
- Virtual scrolling calculations
- Dynamic chart sizing
- Canvas dimensions

**Browser Compatibility**: Uses ResizeObserver API, with polyfill fallback

**Performance Considerations**:
- Debounced updates to prevent excessive re-renders
- Consider throttling for rapidly resizing elements

---

### useScroll

 A hook for tracking scroll position and velocity.

```typescript
const position = useScroll(target, options);

interface Position {
  left: number;
  top: number;
}

interface ScrollPosition extends Position {
  direction: 'up' | 'down' | 'left' | 'right';
}

interface Options {
  throttle?: number;
  leading?: boolean;
  trailing?: boolean;
}
```

**Examples**:

```tsx
// Scroll progress indicator
const scroll = useScroll(document);
const scrollProgress = scroll.top / (document.documentElement.scrollHeight - window.innerHeight);

// Parallax effect
const [offsetY, setOffsetY] = useState(0);
useScroll((position) => {
  setOffsetY(position.top * 0.5);
});

// Infinite scroll
const { top } = useScroll(containerRef);
useEffect(() => {
  if (top + containerHeight >= contentHeight - 100) {
    loadMore();
  }
}, [top]);
```

**Common Use Cases**:
- Scroll indicators
- Parallax effects
- Infinite loading
- Sticky headers
- Lazy loading

**Performance Considerations**:
- Use throttle option for performance
- Consider passive event listeners

---

### useMouse

 A hook for tracking mouse position and state.

```typescript
const mouse = useMouse(target);

interface MousePosition {
  pageX: number;
  pageY: number;
  clientX: number;
  clientY: number;
  screenX: number;
  screenY: number;
  elementX: number;
  elementY: number;
  elementRelX: number;
  elementRelY: number;
}

interface MouseState extends MousePosition {
  targetX: number;
  targetY: number;
}
```

**Examples**:

```tsx
// Custom cursor
const mouse = useMouse();
return (
  <div
    style={{
      transform: `translate(${mouse.pageX}px, ${mouse.pageY}px)`
    }}
  />
);

// Mouse tracking for charts
const { elementX, elementY, elementRelX, elementRelY } = useMouse(chartRef);
const tooltipPosition = {
  left: elementRelX,
  top: elementRelY
};

// Mouse trail effect
useMouse((position) => {
  createTrailParticle(position.pageX, position.pageY);
});
```

**Common Use Cases**:
- Custom cursors
- Tooltips and popovers
- Interactive visualizations
- Mouse trail effects

**Performance Considerations**:
- Throttle updates for smooth performance
- Consider RAF for animation-heavy scenarios

---

### useHover

 A hook for detecting hover state on elements.

```typescript
const [isHovering, hoverProps] = useHover(options);

interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
  onMouseEnter?: (event: MouseEvent) => void;
  onMouseLeave?: (event: MouseEvent) => void;
  delayEnter?: number;
  delayLeave?: number;
}
```

**Examples**:

```tsx
// Hover card
const [isHovering, hoverProps] = useHover();
return (
  <Card {...hoverProps}>
    {isHovering ? <CardActions /> : null}
  </Card>
);

// Tooltip with delay
const [showTooltip, tooltipProps] = useHover({
  delayEnter: 500,
  delayLeave: 200
});

// Hover effects with callbacks
const [isHovering, hoverProps] = useHover({
  onEnter: () => log('Mouse entered'),
  onLeave: () => log('Mouse left')
});
```

**Common Use Cases**:
- Tooltips and popovers
- Hover effects and animations
- Dropdown menus
- Image galleries

**Performance Considerations**:
- Use CSS :hover for simple cases
- Consider accessibility (touch devices)

---

### useClickAway

 A hook for listening to clicks outside a target element.

```typescript
useClickAway<T extends Event = Event>(
  onClickAway: (event: T) => void,
  target: Target | Target[],
  eventName?: DocumentEventKey | DocumentEventKey[]
);

type Target = Element | (() => Element) | React.MutableRefObject<Element>;
```

**Examples**:

```tsx
// Modal close on outside click
const modalRef = useRef();
useClickAway(() => {
  closeModal();
}, modalRef);

// Multiple targets
useClickAway(() => {
  closeAllMenus();
}, [menuRef, dropdownRef]);

// Custom event
useClickAway(() => {
  handleEscape();
}, modalRef, 'mousedown');
```

**Common Use Cases**:
- Modal dialogs
- Dropdown menus
- Context menus
- Select components

**Performance Considerations**:
- Use event delegation for better performance
- Consider portal content handling

---

### useFocusWithin

 A hook for detecting if focus is within a container element.

```typescript
const isFocusWithin = useFocusWithin(target);

interface Options {
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}
```

**Examples**:

```tsx
// Form focus styling
const formRef = useRef();
const isFocused = useFocusWithin(formRef);
return (
  <form
    ref={formRef}
    className={isFocused ? 'form-focused' : ''}
  >
    <input />
    <button>Submit</button>
  </form>
);

// Focus trap
const containerRef = useRef();
useFocusWithin(containerRef, {
  onFocus: () => trapFocus(containerRef.current),
  onBlur: () => releaseFocus()
});
```

**Common Use Cases**:
- Form validation feedback
- Focus traps in modals
- Keyboard navigation
- Accessible widgets

**Browser Compatibility**: All modern browsers

---

### useInViewport

 A hook for detecting if an element is in the viewport.

```typescript
const inView = useInViewport(target, options);

interface Options {
  threshold?: number | number[];
  root?: Element | (() => Element) | React.MutableRefObject<Element>;
  rootMargin?: string;
  callback?: (isInView: boolean) => void;
}
```

**Examples**:

```tsx
// Lazy loading
const imageRef = useRef();
const inView = useInViewport(imageRef);
useEffect(() => {
  if (inView) {
    loadImage();
  }
}, [inView]);

// Intersection observer with threshold
const isVisible = useInViewport(elementRef, {
  threshold: [0, 0.5, 1],
  callback: (visible) => {
    console.log(`Visibility: ${visible}`);
  }
});

// Infinite scroll
const loaderRef = useRef();
const shouldLoad = useInViewport(loaderRef, {
  rootMargin: '100px'
});
```

**Common Use Cases**:
- Lazy loading of images/components
- Infinite scrolling
- View-based animations
- Analytics tracking

**Performance Considerations**:
- Uses Intersection Observer API for optimal performance
- Consider rootMargin for early loading

---

### useFullscreen

 A hook for managing fullscreen functionality.

```typescript
const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] = useFullscreen(target);

interface Options {
  onEnter?: () => void;
  onExit?: () => void;
}
```

**Examples**:

```tsx
// Video player fullscreen
const videoRef = useRef();
const [isFullscreen, { toggleFullscreen }] = useFullscreen(videoRef);

// Gallery fullscreen view
const [isFullscreen, { enterFullscreen, exitFullscreen }] = useFullscreen();
return (
  <>
    <button onClick={enterFullscreen}>Enter Fullscreen</button>
    {isFullscreen && (
      <button onClick={exitFullscreen}>Exit</button>
    )}
  </>
);

// Presentation mode
const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body, {
  onEnter: () => enterPresentationMode(),
  onExit: () => exitPresentationMode()
});
```

**Common Use Cases**:
- Media players
- Image galleries
- Data visualization dashboards
- Presentation slides

**Browser Compatibility**: Requires Fullscreen API support

---

### useDynamicList

 A hook for managing dynamic lists with item operations.

```typescript
const [list, { push, pop, replace, insert, unshift, splice }] = useDynamicList(initialList);

interface Actions<T> {
  push: (item: T) => void;
  pop: () => void;
  replace: (index: number, item: T) => void;
  insert: (index: number, item: T) => void;
  unshift: (item: T) => void;
  splice: (index: number, deleteCount?: number, ...items: T[]) => void;
}
```

**Examples**:

```tsx
// Todo list
const [todos, { push, remove }] = useDynamicList([]);
const addTodo = () => push({ id: Date.now(), text: 'New task' });

// Dynamic form fields
const [fields, { push, splice }] = useDynamicList(['']);
return (
  <>
    {fields.map((field, index) => (
      <input key={index} value={field} />
    ))}
    <button onClick={() => push('')}>Add Field</button>
  </>
);

// Sortable list with operations
const [items, { push, replace }] = useDynamicList(initialItems);
const handleReorder = (fromIndex, toIndex) => {
  const item = items[fromIndex];
  splice(fromIndex, 1);
  insert(toIndex, item);
};
```

**Common Use Cases**:
- Dynamic forms
- Todo lists
- Shopping carts
- Image galleries with add/remove

---

### useVirtualList

 A hook for implementing virtual scrolling for large lists.

```typescript
const [list, containerProps, wrapperProps] = useVirtualList(options);

interface Options {
  containerTarget: Target;
  wrapperTarget: Target;
  itemHeight: number | ((index: number) => number);
  overscan?: number;
}
```

**Examples**:

```tsx
// Large data list
const [list] = useVirtualList({
  list: hugeData,
  containerTarget: containerRef,
  wrapperTarget: wrapperRef,
  itemHeight: 50,
  overscan: 5
});

return (
  <div {...containerProps}>
    <div {...wrapperProps}>
      {list.map(({ data, index }) => (
        <div key={index} style={{ height: 50 }}>
          {data.content}
        </div>
      ))}
    </div>
  </div>
);

// Variable height items
const [list] = useVirtualList({
  list: items,
  itemHeight: (index) => items[index].height,
  // ...other props
});
```

**Common Use Cases**:
- Data tables with thousands of rows
- Chat message lists
- Timeline components
- File explorers

**Performance Considerations**:
- Greatly improves performance for large lists
- Adjust overscan for smooth scrolling

---

### useTextSelection

 A hook for tracking text selection state.

```typescript
const selection = useTextSelection(target);

interface Selection {
  text: string;
  ranges: Range[];
  sRects: DOMRect[];
  eRects: DOMRect[];
}
```

**Examples**:

```tsx
// Text selection toolbar
const selection = useTextSelection();
const showToolbar = !!selection.text;

// Highlight and annotate
const selection = useTextSelection(contentRef);
useEffect(() => {
  if (selection.text) {
    saveSelection(selection);
  }
}, [selection]);

// Copy selection to clipboard
const selection = useTextSelection();
const handleCopy = () => {
  navigator.clipboard.writeText(selection.text);
};
```

**Common Use Cases**:
- Text formatting tools
- Highlight and annotation features
- Copy/paste functionality
- Text analysis tools

---

## Storage Hooks

### useLocalStorageState

 A hook for managing state in localStorage.

```typescript
const [state, setState] = useLocalStorageState<T>(
  key: string,
  options?: Options<T>
);

interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  listenStorageChange?: boolean;
  onError?: (error: unknown) => void;
}
```

**Examples**:

```tsx
// User preferences
const [theme, setTheme] = useLocalStorageState<'light' | 'dark'>(
  'app-theme',
  { defaultValue: 'light' }
);

// Complex object storage
const [userSettings, setUserSettings] = useLocalStorageState(
  'user-settings',
  {
    defaultValue: { language: 'en', fontSize: 14 },
    serializer: JSON.stringify,
    deserializer: JSON.parse
  }
);

// Cross-tab synchronization
const [cart, setCart] = useLocalStorageState('shopping-cart', {
  listenStorageChange: true,
  defaultValue: []
});
```

**Common Use Cases**:
- User preferences and settings
- Shopping cart persistence
- Form data caching
- Application state persistence

**Browser Compatibility**: Requires localStorage support

**Performance Considerations**:
- Large objects can slow down the app
- Consider debouncing frequent writes
- Handle storage quota exceeded

---

### useSessionStorageState

 A hook for managing state in sessionStorage.

```typescript
const [state, setState] = useSessionStorageState<T>(
  key: string,
  options?: Options<T>
);
// Options same as useLocalStorageState
```

**Examples**:

```tsx
// Form temporary data
const [draft, setDraft] = useSessionStorageState('form-draft', {
  defaultValue: {}
});

// Multi-step wizard progress
const [step, setStep] = useSessionStorageState('wizard-step', {
  defaultValue: 0
});

// Temporary authentication tokens
const [token, setToken] = useSessionStorageState('auth-token');
```

**Common Use Cases**:
- Form drafts and temporary data
- Multi-step form progress
- Temporary authentication states
- Single-session data

**Performance Considerations**:
- Limited to 5-10MB typically
- Cleared when tab closes

---

### useCookieState

 A hook for managing state in cookies.

```typescript
const [state, setState] = useCookieState<T>(
  key: string,
  options?: Options<T>
);

interface Options<T> {
  defaultValue?: T | (() => T);
  expires?: Date | number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}
```

**Examples**:

```tsx
// Consent management
const [cookieConsent, setConsent] = useCookieState('cookie-consent', {
  defaultValue: false,
  expires: 365 // days
});

// User locale
const [locale, setLocale] = useCookieState('locale', {
  defaultValue: 'en',
  path: '/',
  secure: true
});

// A/B testing variant
const [variant, setVariant] = useCookieState('ab-test-variant', {
  defaultValue: 'control',
  expires: 30
});
```

**Common Use Cases**:
- Cookie consent management
- User locale preferences
- A/B testing variants
- Server-side readable state

**Performance Considerations**:
- Limited to 4KB per cookie
- Sent with every HTTP request
- Consider SameSite policy for security

---

### useUrlState

 A hook for managing state in URL query parameters.

```typescript
const [state, setState] = useUrlState<T>(options?: Options);

interface Options {
  queryMode?: 'push' | 'replace';
  parseOptions?: {
    arrayFormat?: 'bracket' | 'index' | 'none';
  };
  stringifyOptions?: {
    arrayFormat?: 'bracket' | 'index' | 'none';
  };
}
```

**Examples**:

```tsx
// Search filters
const [filters, setFilters] = useUrlState({
  category: 'all',
  price: undefined,
  rating: undefined
});

// Pagination state
const [page, setPage] = useUrlState({ page: 1, size: 20 });

// Complex query state
const [searchState, setSearchState] = useUrlState({
  q: '',
  filters: [],
  sort: 'relevance',
  view: 'grid'
}, {
  parseOptions: { arrayFormat: 'bracket' }
});
```

**Common Use Cases**:
- Search filters and parameters
- Pagination state
- Shareable application states
- Navigation state preservation

**Performance Considerations**:
- URL length limits (typically 2048 chars)
- Avoid sensitive data in URL
- Consider debouncing for rapid changes

---

## Browser API Hooks

### useDocumentVisibility

 A hook for tracking document visibility state.

```typescript
const visibilityState = useDocumentVisibility();

type VisibilityState = 'visible' | 'hidden' | 'prerender';
```

**Examples**:

```tsx
// Pause video when hidden
const visibility = useDocumentVisibility();
useEffect(() => {
  if (visibility === 'hidden') {
    videoRef.current?.pause();
  } else {
    videoRef.current?.play();
  }
}, [visibility]);

// Refresh data when tab becomes active
useEffect(() => {
  if (visibility === 'visible') {
    refetchData();
  }
}, [visibility]);

// Notification management
const unreadCount = useRef(0);
useDocumentVisibility((state) => {
  if (state === 'visible') {
    document.title = 'My App';
  } else if (unreadCount.current > 0) {
    document.title = `(${unreadCount.current}) My App`;
  }
});
```

**Common Use Cases**:
- Pause/resume media playback
- Data refreshing on tab activation
- Notification management
- Performance optimization

**Browser Compatibility**: Uses Page Visibility API

---

### useNetwork

 A hook for tracking network status and connection information.

```typescript
const networkState = useNetwork();

interface NetworkState {
  online: boolean;
  offlineAt?: number;
  rtt?: number;
  type?: ConnectionType;
  downlink?: number;
  saveData?: boolean;
  downlinkMax?: number;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
}
```

**Examples**:

```tsx
// Network status indicator
const network = useNetwork();
return (
  <div>
    {network.online ? (
      <span className="online">Connected</span>
    ) : (
      <span className="offline">Offline</span>
    )}
  </div>
);

// Offline message queue
const network = useNetwork();
const [messageQueue, setMessageQueue] = useState([]);
useEffect(() => {
  if (!network.online) {
    queueMessages();
  } else {
    flushQueue();
  }
}, [network.online]);

// Adaptive content loading
const network = useNetwork();
const shouldLoadHD = network.effectiveType === '4g';
const imageQuality = shouldLoadHD ? 'high' : 'low';
```

**Common Use Cases**:
- Offline/online state handling
- Adaptive loading strategies
- Network-aware UI
- Data synchronization

**Browser Compatibility**: Network Information API is experimental

---

### useKeyPress

 A hook for capturing keyboard shortcuts and key presses.

```typescript
useKeyPress(keyFilter: KeyFilter | KeyFilter[], eventHandler: EventHandler, options?: Options);

type KeyFilter = string | ((event: KeyboardEvent) => boolean);
type EventHandler = (event: KeyboardEvent) => void;

interface Options {
  events?: KeyboardEvent['type'][];
  target?: Target;
  exactMatch?: boolean;
}
```

**Examples**:

```tsx
// Single key capture
useKeyPress('Enter', () => {
  submitForm();
});

// Keyboard shortcuts
useKeyPress(['ctrl.s', 'meta.s'], (e) => {
  e.preventDefault();
  saveDocument();
});

// Arrow key navigation
useKeyPress('ArrowUp', () => {
  selectPrevious();
});
useKeyPress('ArrowDown', () => {
  selectNext();
});

// Complex shortcut with modifiers
useKeyPress('shift.ctrl.a', (e) => {
  console.log('Select all');
}, {
  exactMatch: true
});
```

**Common Use Cases**:
- Keyboard shortcuts
- Form navigation
- Game controls
- Accessibility features

**Performance Considerations**:
- Consider passive listeners for non-critical keys
- Debounce rapid key presses

---

### useMutationObserver

 A hook for observing DOM changes.

```typescript
useMutationObserver(
  callback: MutationCallback,
  target: Target,
  options?: MutationObserverInit
);

interface MutationObserverInit {
  attributes?: boolean;
  characterData?: boolean;
  childList?: boolean;
  subtree?: boolean;
  attributeFilter?: string[];
  attributeOldValue?: boolean;
  characterDataOldValue?: boolean;
}
```

**Examples**:

```tsx
// Observe element attributes
useMutationObserver(
  (mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-state') {
        handleStateChange();
      }
    });
  },
  elementRef,
  { attributes: true }
);

// Observe content changes
useMutationObserver(
  () => {
    adjustLayout();
  },
  containerRef,
  { childList: true, subtree: true }
);

// Auto-save on content change
const autoSave = useCallback(
  debounce(() => {
    saveContent();
  }, 1000),
  []
);

useMutationObserver(autoSave, editorRef, {
  characterData: true,
  childList: true,
  subtree: true
});
```

**Common Use Cases**:
- ContentEditable editors
- Auto-save functionality
- Dynamic content adaptation
- Component resize handling

**Browser Compatibility**: Requires MutationObserver support

---

### useTitle

 A hook for managing document title.

```typescript
const setTitle = useTitle(title: string, options?: Options);

interface Options {
  restoreOnUnmount?: boolean;
}
```

**Examples**:

```tsx
// Dynamic page titles
useTitle('Dashboard');
useTitle(`User Profile - ${userName}`);

// Unread count in title
const unreadCount = useUnreadCount();
useTitle(
  unreadCount > 0
    ? `(${unreadCount}) My App`
    : 'My App'
);

// Restore original title on unmount
useTitle('Settings Page', {
  restoreOnUnmount: true
});
```

**Common Use Cases**:
- Dynamic page titles
- Unread notifications count
- Loading states
- Application state indicators

---

### useFavicon

 A hook for managing the page favicon.

```typescript
useFavicon(href: string);
```

**Examples**:

```tsx
// Change favicon based on state
const isOnline = useNetwork().online;
useFavicon(isOnline ? '/favicon.ico' : '/favicon-offline.ico');

// Notification favicon
const hasNotifications = useHasNotifications();
useFavicon(hasNotifications ? '/favicon-notification.ico' : '/favicon.ico');

// Dark mode favicon
const isDark = useDarkMode();
useFavicon(isDark ? '/favicon-dark.ico' : '/favicon-light.ico');
```

**Common Use Cases**:
- Connection status indicators
- Notification indicators
- Theme-based favicons
- Application state indicators

**Browser Compatibility**: Safari doesn't support dynamic favicon changes

---

### useResponsive

 A hook for responsive design utilities.

```typescript
const responsive = useResponsive(breakpoints?: Breakpoints);

interface ResponsiveState {
  [key: string]: boolean;
  [key: `${Breakpoint}Only`]: boolean;
  [key: `${Breakpoint}AndUp`]: boolean;
  [key: `${Breakpoint}AndDown`]: boolean;
}

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
```

**Examples**:

```tsx
// Responsive layout
const responsive = useResponsive({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
});

// Conditional rendering
return (
  <>
    {responsive.xs && <MobileLayout />}
    {responsive.lg && <DesktopLayout />}
  </>
);

// Adaptive components
const { smOnly, mdAndUp } = useResponsive();
const columns = smOnly ? 1 : mdAndUp ? 3 : 2;

// Custom breakpoints
const { tablet, desktop } = useResponsive({
  tablet: 768,
  desktop: 1024
});
```

**Common Use Cases**:
- Conditional rendering
- Responsive layouts
- Adaptive UI components
- Breakpoint-specific logic

**Performance Considerations**:
- Debounced resize events
- Consider CSS-first approach for simple cases

---

### useTheme

 A hook for managing application theme.

```typescript
const [theme, setTheme] = useTheme(defaultTheme?: string);

interface ThemeManager {
  theme: string;
  setTheme: (theme: string) => void;
  toggle: () => void;
  system: 'light' | 'dark';
}
```

**Examples**:

```tsx
// Basic theme switching
const [theme, setTheme] = useTheme('light');
const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

// System theme detection
const [theme, { toggle }] = useTheme();
const isDark = theme === 'dark';

// Theme-aware components
const buttonStyles = {
  backgroundColor: theme === 'dark' ? '#333' : '#fff',
  color: theme === 'dark' ? '#fff' : '#333'
};

// Multiple themes
const themes = ['light', 'dark', 'sepia', 'high-contrast'];
const [currentTheme, setTheme] = useTheme('light');
```

**Common Use Cases**:
- Light/dark mode switching
- Multiple theme support
- System preference detection
- Theme-aware styling

---

## Timer Hooks

### useInterval

 A hook for creating and managing intervals.

```typescript
useInterval(
  callback: () => void,
  delay: number | null,
  options?: Options
);

interface Options {
  immediate?: boolean;
}
```

**Examples**:

```tsx
// Simple counter
const [count, setCount] = useState(0);
useInterval(() => {
  setCount(c => c + 1);
}, 1000);

// Polling data
useInterval(() => {
  fetchLatestData();
}, 5000);

// Controllable interval
const [isRunning, setIsRunning] = useState(false);
useInterval(() => {
  updateProgress();
}, isRunning ? 100 : null);

// Immediate execution
useInterval(() => {
  checkStatus();
}, 2000, { immediate: true });
```

**Common Use Cases**:
- Counters and timers
- Data polling
- Status checking
- Real-time updates

**Performance Considerations**:
- Clean up intervals on unmount
- Consider requestAnimationFrame for visual updates

---

### useTimeout

 A hook for creating and managing timeouts.

```typescript
useTimeout(
  callback: () => void,
  delay: number | null
);
```

**Examples**:

```tsx
// Auto-hide message
const showMessage = () => {
  setMessage('Hello!');
  useTimeout(() => {
    setMessage(null);
  }, 3000);
};

// Debounced search
const [searchTerm, setSearchTerm] = useState('');
useTimeout(() => {
  performSearch(searchTerm);
}, 500);

// Idle detection
const resetIdleTimer = () => {
  useTimeout(() => {
    showIdleWarning();
  }, 300000); // 5 minutes
};

// Delayed navigation
const handleLogout = () => {
  setLoading(true);
  useTimeout(() => {
    navigate('/login');
  }, 1000);
};
```

**Common Use Cases**:
- Auto-dismissing notifications
- Debounced actions
- Idle detection
- Delayed navigation
- Loading states

**Performance Considerations**:
- Clear timeouts on unmount
- Use proper cleanup in effects

---

## Conclusion

This reference covers the essential DOM, UI, Storage, and Browser API hooks provided by ahooks. These hooks simplify common patterns and provide robust solutions for building modern web applications.

### Best Practices

1. **Performance First**: Always consider performance implications when using hooks that observe or manipulate the DOM.

2. **Cleanup**: Most hooks automatically handle cleanup, but be mindful of custom cleanup logic in your effects.

3. **Browser Compatibility**: Check compatibility before using newer browser APIs.

4. **Accessibility**: Consider how your hook usage affects accessibility, especially for mouse/keyboard interactions.

5. **TypeScript Support**: Leverage TypeScript for better type safety and developer experience.

### Additional Resources

- [ahooks Official Documentation](https://ahooks.js.org/)
- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
- [Web APIs on MDN](https://developer.mozilla.org/en-US/docs/Web/API) / [MDN Web APIs](https://developer.mozilla.org/zh-CN/docs/Web/API)