# ahooks Best Practices Guide

## Table of Contents

- [Performance Optimization](#performance-optimization)
- [Architecture Patterns](#architecture-patterns)
- [TypeScript Integration](#typescript-integration)
- [Testing Strategies](#testing-strategies)
- [Common Anti-patterns](#common-anti-patterns)
- [Security Considerations](#security-considerations)
- [Accessibility Guidelines](#accessibility-guidelines)

---

## Performance Optimization

### 1. Hook Selection Principles

- Choose the most specific hook for your use case
- Prefer specialized hooks over generic ones when available
- Consider computational complexity for large datasets

#### Code Examples:

```tsx
// ❌ Bad: Using useRequest for simple local state
function UserProfile({ userId }) {
  const [data, setData] = useState(null);
  const { run } = useRequest(
    () => fetch(`/api/users/${userId}`),
    { manual: true }
  );

  useEffect(() => {
    run();
  }, [userId]);

  return <div>{data?.name}</div>;
}

// ✅ Good: Using specialized hook for API calls
function UserProfile({ userId }) {
  const { data, loading, error } = useRequest(
    () => fetch(`/api/users/${userId}`).then(res => res.json()),
    {
      ready: !!userId,
      refreshDeps: [userId]
    }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data?.name}</div>;
}
```

### 2. Memory Management

- Always cleanup subscriptions and event listeners
- Use useMemo/useCallback for expensive computations
- Implement proper cleanup in custom hooks

#### Code Examples:

```tsx
// ❌ Bad: No cleanup for event listeners
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return size;
}

// ✅ Good: Proper cleanup implemented
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}

// ✅ Even Better: Using ahooks' built-in hook
function useWindowSize() {
  return useWindowSize(); // Direct use from ahooks
}
```

### 3. Bundle Size Optimization

- Import only needed hooks instead of the entire library
- Use tree-shaking compatible import syntax
- Consider lazy loading for rarely used hooks

#### Performance Benchmarks:

| Approach | Bundle Size | Load Time |
|----------|-------------|-----------|
| Full Import | ~45KB | 120ms |
| Selective Import | ~8KB | 25ms |
| Lazy Loading | ~2KB (initial) | 10ms |

#### Code Examples:

```tsx
// ❌ Bad: Importing entire library
import * as ahooks from 'ahooks';

// ❌ Still bad: Default import
import ahooks from 'ahooks';

// ✅ Good: Selective import
import { useRequest, useAntdTable } from 'ahooks';

// ✅ Even Better: Individual imports (if supported)
import useRequest from 'ahooks/lib/useRequest';
import useAntdTable from 'ahooks/lib/useAntdTable';

// ✅ Best: Dynamic import for rarely used hooks
const heavyComponent = React.lazy(() => import('./components/HeavyComponent'));
```

### 4. Optimization Checklist

- [ ] Use appropriate hooks for specific use cases
- [ ] Implement proper cleanup patterns
- [ ] Memoize expensive computations
- [ ] Import hooks selectively
- [ ] Monitor bundle size impact
- [ ] Test performance with realistic data
- [ ] Consider SSR implications

---

## Architecture Patterns

### 1. Hook Composition Patterns

- Build complex logic from simple, reusable hooks
- Use custom hooks to encapsulate related logic
- Leverage ahooks hooks as building blocks

#### Code Examples:

```tsx
// ❌ Bad: Monolithic component with mixed concerns
function UserDashboard() {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [userData, notificationData, settingsData] = await Promise.all([
          fetch('/api/user'),
          fetch('/api/notifications'),
          fetch('/api/settings')
        ]);

        setUser(await userData.json());
        setNotifications(await notificationData.json());
        setSettings(await settingsData.json());
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Component logic mixed with data fetching...

  return <div>{/* Complex component */}</div>;
}

// ✅ Good: Composed hooks for separation of concerns
function useUserData() {
  return useRequest('/api/user', {
    cacheKey: 'user-data',
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

function useNotifications() {
  return useRequest('/api/notifications', {
    pollingInterval: 30000, // Poll every 30 seconds
    cacheKey: 'notifications',
  });
}

function useSettings() {
  return useLocalStorageState('user-settings', {
    defaultValue: { theme: 'light', language: 'en' }
  });
}

function useDashboardData() {
  const userQuery = useUserData();
  const notificationsQuery = useNotifications();
  const [settings] = useSettings();

  return useRequest(() => Promise.all([
    userQuery.run(),
    notificationsQuery.run(),
    Promise.resolve(settings)
  ]), {
    manual: true,
    ready: !userQuery.loading && !notificationsQuery.loading,
  });
}

function UserDashboard() {
  const { data, loading, error } = useDashboardData();

  if (loading) return <DashboardSkeleton />;
  if (error) return <ErrorDisplay error={error} />;

  const [user, notifications, settings] = data;

  return <DashboardContent user={user} notifications={notifications} settings={settings} />;
}
```

### 2. State Management Architecture

- Use ahooks for local state and side effects
- Combine with context for global state
- Leverage useRequest for server state management

#### Code Examples:

```tsx
// Global state with Context and ahooks
interface AppContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// ✅ Good: Using ahooks for global state management
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useLocalStorageState('app-user', { defaultValue: null });
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  const { run: login, loading } = useRequest(
    async (credentials: Credentials) => {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) throw new Error('Login failed');

      const userData = await response.json();
      setUser(userData);
      setIsAuthenticated(true);
    },
    { manual: true }
  );

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
  }, [setUser]);

  const value = useMemo(() => ({
    user,
    isAuthenticated,
    login,
    logout,
  }), [user, isAuthenticated, login, logout]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
```

### 3. Error Handling Patterns

- Implement comprehensive error boundaries
- Use ahooks error handling features effectively
- Provide meaningful user feedback

#### Code Examples:

```tsx
// ✅ Good: Comprehensive error handling with ahooks
function useApiCall<T>(url: string, options?: RequestOptions) {
  const { data, error, loading, run } = useRequest<T>(
    url,
    {
      retryCount: 3,
      retryInterval: 1000,
      onError: (error) => {
        console.error(`API call failed for ${url}:`, error);
        // Track error to monitoring service
        trackError('api_call_failed', { url, error: error.message });
      },
      ...options,
    }
  );

  return {
    data,
    error,
    loading,
    run,
    hasError: !!error,
    isSuccess: !!data && !error,
  };
}

// Error boundary for React components
function ApiErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallback={({ error, reset }) => (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <p>{error.message}</p>
          <button onClick={reset}>Try Again</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
```

### 4. Architecture Checklist

- [ ] Separate concerns using custom hooks
- [ ] Combine related hooks logically
- [ ] Implement proper error boundaries
- [ ] Use caching strategies effectively
- [ ] Design for reusability and testability
- [ ] Document hook contracts and dependencies
- [ ] Consider loading and error states

---

## TypeScript Integration

### 1. Type Safety Best Practices

- Define explicit types for hook parameters and returns
- Use generics for reusable hooks
- Leverage TypeScript for compile-time checks

#### Code Examples:

```tsx
// ❌ Bad: No type definitions
function useUserData() {
  const [data, setData] = useState(null);
  const { run } = useRequest('/api/user');

  useEffect(() => {
    run();
  }, [run]);

  return { data };
}

// ✅ Good: Strong TypeScript integration
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user';
}

interface UseUserDataOptions {
  cacheKey?: string;
  staleTime?: number;
  onSuccess?: (data: User) => void;
}

interface UseUserDataReturn {
  data: User | undefined;
  loading: boolean;
  error: Error | undefined;
  refetch: () => void;
  update: (updates: Partial<User>) => Promise<User>;
}

function useUserData(options: UseUserDataOptions = {}): UseUserDataReturn {
  const {
    data,
    loading,
    error,
    run: refetch,
    refresh,
  } = useRequest<User>(
    '/api/user',
    {
      cacheKey: options.cacheKey || 'user-data',
      staleTime: options.staleTime || 5 * 60 * 1000,
      onSuccess: options.onSuccess,
    }
  );

  const update = useCallback(async (updates: Partial<User>): Promise<User> => {
    const response = await fetch('/api/user', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });

    if (!response.ok) throw new Error('Update failed');

    const updatedUser = await response.json();
    refresh();

    return updatedUser;
  }, [refresh]);

  return {
    data,
    loading,
    error,
    refetch,
    update,
  };
}
```

### 2. Generic Hook Patterns

#### Code Examples:

```tsx
// ✅ Generic reusable hook with TypeScript
interface UseApiResult<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
  refetch: () => Promise<void>;
  mutate: (newData: T) => void;
}

interface UseApiOptions<T> {
  url: string;
  initialData?: T;
  cacheKey?: string;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

function useApi<T>({
  url,
  initialData,
  cacheKey,
  onSuccess,
  onError,
}: UseApiOptions<T>): UseApiResult<T> {
  const [data, setData] = useState<T | undefined>(initialData);

  const {
    data: responseData,
    loading,
    error,
    run: fetchData,
  } = useRequest<T>(
    url,
    {
      cacheKey,
      onSuccess: (responseData) => {
        setData(responseData);
        onSuccess?.(responseData);
      },
      onError,
    }
  );

  useEffect(() => {
    if (responseData) {
      setData(responseData);
    }
  }, [responseData]);

  const refetch = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  const mutate = useCallback((newData: T) => {
    setData(newData);
  }, []);

  return {
    data,
    loading,
    error,
    refetch,
    mutate,
  };
}

// Usage examples
interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

function usePost(id: string) {
  return useApi<Post>({
    url: `/api/posts/${id}`,
    cacheKey: `post-${id}`,
    initialData: {
      id: '',
      title: '',
      content: '',
      author: '',
    },
  });
}

function useComments(postId: string) {
  return useApi<Comment[]>({
    url: `/api/posts/${postId}/comments`,
    cacheKey: `comments-${postId}`,
  });
}
```

### 3. Type-Safe Event Handling

#### Code Examples:

```tsx
// ✅ Type-safe custom event hook
interface UseEventListenerOptions<T extends HTMLElement> {
  target?: RefObject<T> | T | Window;
  event: keyof HTMLElementEventMap | keyof WindowEventMap;
  handler: (event: Event) => void;
  enabled?: boolean;
}

function useSafeEventListener<T extends HTMLElement>({
  target,
  event,
  handler,
  enabled = true,
}: UseEventListenerOptions<T>) {
  const savedHandler = useRef(handler);

  useUpdateEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled) return;

    const element = target && 'current' in target
      ? target.current
      : target || window;

    if (!element) return;

    const eventHandler = (e: Event) => savedHandler.current(e);

    element.addEventListener(event, eventHandler);

    return () => {
      element.removeEventListener(event, eventHandler);
    };
  }, [event, enabled, target]);
}

// Usage
function ClickableButton() {
  const [clicks, setClicks] = useCounter();

  useSafeEventListener({
    event: 'click',
    handler: (event: MouseEvent) => {
      // TypeScript knows this is a MouseEvent
      console.log('Click coordinates:', event.clientX, event.clientY);
      setClicks(clicks + 1);
    },
    target: useRef<HTMLButtonElement>(null),
  });

  return <button>Clicked {clicks} times</button>;
}
```

### 4. TypeScript Checklist

- [ ] Define interfaces for all data structures
- [ ] Use generics for reusable hooks
- [ ] Type all hook parameters and returns
- [ ] Leverage utility types (Partial, Pick, Omit)
- [ ] Handle undefined and null cases explicitly
- [ ] Use discriminated unions for state types
- [ ] Document complex type definitions

---

## Testing Strategies

### 1. Unit Testing Hooks

- Test hook logic independently of components
- Use React Testing Library's renderHook
- Mock external dependencies appropriately

#### Code Examples:

```tsx
// ✅ Testing a custom hook with React Testing Library
import { renderHook, act, waitFor } from '@testing-library/react';
import { useRequest } from 'ahooks';

// Test for useApi hook
describe('useApi', () => {
  const mockFetch = jest.fn();

  beforeEach(() => {
    global.fetch = mockFetch;
    mockFetch.mockClear();
  });

  it('should fetch data successfully', async () => {
    const mockData = { id: 1, name: 'Test Data' };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() => useApi({ url: '/api/test' }));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeUndefined();
    });
  });

  it('should handle API errors', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ error: 'Internal Server Error' }),
    });

    const { result } = renderHook(() => useApi({ url: '/api/test' }));

    await waitFor(() => {
      expect(result.current.error).toBeDefined();
      expect(result.current.loading).toBe(false);
    });
  });

  it('should cache data when cacheKey is provided', async () => {
    const mockData = { id: 1, name: 'Cached Data' };
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const { result, rerender } = renderHook(
      ({ url, cacheKey }) => useApi({ url, cacheKey }),
      {
        initialProps: { url: '/api/test', cacheKey: 'test-key' },
      }
    );

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
    });

    // Re-render with same cache key
    rerender({ url: '/api/test', cacheKey: 'test-key' });

    // Should not make another request
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});
```

### 2. Integration Testing

#### Code Examples:

```tsx
// ✅ Testing hooks in component context
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UserDashboard } from './UserDashboard';

describe('UserDashboard Integration', () => {
  beforeEach(() => {
    // Reset localStorage
    localStorage.clear();
  });

  it('should display user data after successful login', async () => {
    const mockUser = { id: 1, name: 'John Doe', email: 'john@example.com' };

    render(
      <AppProvider>
        <UserDashboard />
      </AppProvider>
    );

    // Initially shows login form
    expect(screen.getByText(/login/i)).toBeInTheDocument();

    // Fill login form
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Should show user data after login
    await waitFor(() => {
      expect(screen.getByText(/welcome, john doe/i)).toBeInTheDocument();
      expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    });
  });

  it('should persist user state across page reloads', async () => {
    const mockUser = { id: 1, name: 'John Doe', email: 'john@example.com' };

    // Simulate login
    localStorage.setItem('app-user', JSON.stringify(mockUser));

    render(
      <AppProvider>
        <UserDashboard />
      </AppProvider>
    );

    // Should show logged-in state immediately
    expect(screen.getByText(/welcome, john doe/i)).toBeInTheDocument();
  });
});
```

### 3. Performance Testing

#### Code Examples:

```tsx
// ✅ Testing hook performance with jest-performance
import { performance } from 'perf_hooks';

describe('Hook Performance Tests', () => {
  it('should debounce API calls efficiently', async () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;

    const startTime = performance.now();

    const { result } = renderHook(() =>
      useDebouncedRequest('/api/search', { wait: 300 })
    );

    // Rapid calls
    for (let i = 0; i < 10; i++) {
      act(() => {
        result.current.run(`query${i}`);
      });
    }

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    const endTime = performance.now();

    // Should complete within reasonable time
    expect(endTime - startTime).toBeLessThan(500);
  });

  it('should handle large datasets efficiently', async () => {
    const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
    }));

    const { result } = renderHook(() => useVirtualizedList(largeDataset));

    const startTime = performance.now();

    // Simulate scroll to bottom
    act(() => {
      result.current.scrollToIndex(9999);
    });

    const endTime = performance.now();

    // Should handle large datasets quickly
    expect(endTime - startTime).toBeLessThan(100);
  });
});
```

### 4. Testing Checklist

- [ ] Write unit tests for all custom hooks
- [ ] Test happy paths and edge cases
- [ ] Mock external dependencies properly
- [ ] Test error handling scenarios
- [ ] Verify cleanup functions work
- [ ] Test performance with realistic data
- [ ] Include integration tests for complex scenarios
- [ ] Test SSR compatibility if applicable

---

## Common Anti-patterns

### 1. Overusing Hooks

- Don't use hooks for simple computations
- Avoid unnecessary state management
- Minimize hook dependencies

#### Code Examples:

```tsx
// ❌ Bad: Using hooks for simple calculations
function PriceDisplay({ price, discount }) {
  const [finalPrice] = useComputed(() => {
    return price * (1 - discount);
  });

  return <span>${finalPrice.toFixed(2)}</span>;
}

// ✅ Good: Simple computation without hooks
function PriceDisplay({ price, discount }) {
  const finalPrice = price * (1 - discount);
  return <span>${finalPrice.toFixed(2)}</span>;
}

// ❌ Bad: Unnecessary state for derived values
function UserProfile({ user }) {
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    setDisplayName(`${user.firstName} ${user.lastName}`);
  }, [user.firstName, user.lastName]);

  return <div>{displayName}</div>;
}

// ✅ Good: Compute derived values directly
function UserProfile({ user }) {
  const displayName = useMemo(() =>
    `${user.firstName} ${user.lastName}`,
    [user.firstName, user.lastName]
  );

  return <div>{displayName}</div>;
}
```

### 2. Dependency Array Mistakes

#### Code Examples:

```tsx
// ❌ Bad: Missing dependencies
function SearchComponent({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchAPI(query)
      .then(setResults)
      .finally(() => setLoading(false));
  }, []); // Missing query dependency!

  return <ResultsList results={results} loading={loading} />;
}

// ✅ Good: Correct dependencies
function SearchComponent({ query }) {
  const { data: results, loading } = useRequest(
    () => searchAPI(query),
    {
      ready: !!query,
      refreshDeps: [query],
    }
  );

  return <ResultsList results={results || []} loading={loading} />;
}

// ❌ Bad: Including functions in dependencies without memoization
function Component({ fetchData }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, [fetchData]); // fetchData changes on every render!

  return <div>{data}</div>;
}

// ✅ Good: Memoize callback functions
function Component({ fetchData }) {
  const [data, setData] = useState(null);

  const stableFetchData = useCallback(() => fetchData(), [fetchData]);

  const { run } = useRequest(stableFetchData, {
    manual: true,
  });

  useEffect(() => {
    run().then(setData);
  }, [run]);

  return <div>{data}</div>;
}
```

### 3. Memory Leaks

#### Code Examples:

```tsx
// ❌ Bad: Potential memory leak with timers
function Countdown({ seconds }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Timer continues even after component unmounts
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // No cleanup function!
  }, []);

  return <div>{timeLeft}s</div>;
}

// ✅ Good: Proper cleanup with useInterval
function Countdown({ seconds }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useInterval(() => {
    setTimeLeft(prev => {
      if (prev <= 1) return 0;
      return prev - 1;
    });
  }, timeLeft > 0 ? 1000 : null);

  return <div>{timeLeft}s</div>;
}

// ✅ Even Better: Using ahooks useCountdown
function Countdown({ seconds }) {
  const [countdown] = useCountdown({
    leftTime: seconds * 1000,
    onEnd: () => {
      console.log('Countdown finished');
    },
  });

  return <div>{Math.ceil(countdown / 1000)}s</div>;
}
```

### 4. Anti-patterns Checklist

- [ ] Avoid over-engineering simple problems
- [ ] Check dependency arrays for completeness
- [ ] Always implement cleanup functions
- [ ] Don't use hooks for static values
- [ ] Avoid infinite render loops
- [ ] Don't mutate state directly
- [ ] Use appropriate caching strategies

---

## Security Considerations

### 1. Data Sanitization

- Sanitize user inputs before processing
- Validate API responses
- Prevent XSS attacks

#### Code Examples:

```tsx
// ❌ Bad: No input sanitization
function CommentForm({ onComment }) {
  const [comment, setComment] = useState('');

  return (
    <div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment"
      />
      <button onClick={() => onComment(comment)}>
        Submit
      </button>
    </div>
  );
}

// ✅ Good: Input sanitization with ahooks
function CommentForm({ onComment }) {
  const [comment, setComment] = useState('');

  const { run: submitComment, loading } = useRequest(
    async (content) => {
      // Sanitize input
      const sanitized = content
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<[^>]*>/g, '')
        .trim()
        .substring(0, 1000); // Limit length

      if (!sanitized) {
        throw new Error('Comment cannot be empty');
      }

      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: sanitized }),
      });

      if (!response.ok) throw new Error('Failed to submit comment');

      return response.json();
    },
    {
      manual: true,
      onSuccess: () => {
        setComment(''); // Clear form on success
        onComment?.();
      },
      onError: (error) => {
        alert(`Error: ${error.message}`);
      },
    }
  );

  return (
    <div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment"
        maxLength={1000}
      />
      <button
        onClick={() => submitComment(comment)}
        disabled={loading || !comment.trim()}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
}
```

### 2. Authentication and Authorization

#### Code Examples:

```tsx
// ✅ Secure authentication hook with ahooks
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  roles: string[];
}

function useAuthentication() {
  const [authState, setAuthState] = useLocalStorageState<AuthState>('auth', {
    defaultValue: {
      user: null,
      token: null,
      isAuthenticated: false,
      roles: [],
    },
  });

  const { run: login, loading } = useRequest(
    async (credentials: LoginCredentials) => {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
      }

      const { user, token, roles } = await response.json();

      // Validate token format
      if (!token || typeof token !== 'string') {
        throw new Error('Invalid authentication token');
      }

      setAuthState({
        user,
        token,
        isAuthenticated: true,
        roles: roles || [],
      });

      // Store token securely (consider httpOnly cookies in production)
      localStorage.setItem('auth_token', token);

      return { user, token, roles };
    },
    {
      manual: true,
      onError: (error) => {
        console.error('Login error:', error);
        setAuthState({
          user: null,
          token: null,
          isAuthenticated: false,
          roles: [],
        });
      },
    }
  );

  const logout = useCallback(() => {
    // Clear stored token
    localStorage.removeItem('auth_token');
    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      roles: [],
    });
  }, [setAuthState]);

  const hasRole = useCallback((role: string) => {
    return authState.roles.includes(role);
  }, [authState.roles]);

  return {
    ...authState,
    login,
    logout,
    loading,
    hasRole,
  };
}

// Authorization wrapper component
function ProtectedComponent({
  requiredRole,
  children
}: {
  requiredRole?: string;
  children: React.ReactNode;
}) {
  const { isAuthenticated, hasRole } = useAuthentication();

  if (!isAuthenticated) {
    return <div>Please log in to access this content</div>;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <div>You don't have permission to access this content</div>;
  }

  return <>{children}</>;
}
```

### 3. API Security

#### Code Examples:

```tsx
// ✅ Secure API hook with authentication and rate limiting
function useSecureApi<T>(options: SecureApiOptions) {
  const { token } = useAuthentication();
  const lastRequestTime = useRef(0);
  const requestQueue = useRef<Array<{ resolve: Function; reject: Function }>>([]);

  const { run, loading, error } = useRequest<T>(
    async (endpoint: string, data?: any, customOptions?: RequestOptions) => {
      // Rate limiting: prevent more than 10 requests per second
      const now = Date.now();
      const timeSinceLastRequest = now - lastRequestTime.current;

      if (timeSinceLastRequest < 100) {
        await new Promise(resolve => setTimeout(resolve, 100 - timeSinceLastRequest));
      }

      lastRequestTime.current = Date.now();

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...customOptions?.headers,
      };

      // Add authentication header
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: customOptions?.method || 'GET',
        headers,
        body: data ? JSON.stringify(data) : undefined,
        // Add CSRF protection
        credentials: 'same-origin',
      });

      // Handle unauthorized responses
      if (response.status === 401) {
        // Token expired, trigger logout
        useAuthentication.getState().logout();
        throw new Error('Session expired. Please log in again.');
      }

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      return response.json();
    },
    {
      retryCount: 3,
      retryInterval: 1000,
      ...options,
    }
  );

  return { run, loading, error };
}
```

### 4. Security Checklist

- [ ] Sanitize all user inputs
- [ ] Implement proper authentication flows
- [ ] Use HTTPS for all API calls
- [ ] Store sensitive data securely
- [ ] Implement rate limiting
- [ ] Validate all API responses
- [ ] Use Content Security Policy headers
- [ ] Prevent XSS and injection attacks
- [ ] Log security events
- [ ] Regularly update dependencies

---

## Accessibility Guidelines

### 1. Keyboard Navigation

- Ensure all interactive elements are keyboard accessible
- Provide visible focus indicators
- Support common keyboard shortcuts

#### Code Examples:

```tsx
// ✅ Accessible dropdown with keyboard navigation
function useAccessibleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLButtonElement[]>([]);

  const { run: openDropdown } = useRequest(() => {
    setIsOpen(true);
    setFocusedIndex(-1);
  }, { manual: true });

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        if (!isOpen) {
          openDropdown();
        } else if (focusedIndex >= 0) {
          itemsRef.current[focusedIndex]?.click();
        }
        break;

      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          openDropdown();
        } else {
          setFocusedIndex(prev =>
            prev < itemsRef.current.length - 1 ? prev + 1 : 0
          );
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev =>
            prev > 0 ? prev - 1 : itemsRef.current.length - 1
          );
        }
        break;

      case 'Escape':
        closeDropdown();
        break;

      case 'Tab':
        closeDropdown();
        break;
    }
  }, [isOpen, focusedIndex, openDropdown, closeDropdown]);

  // Click outside to close
  useClickAway(dropdownRef, closeDropdown);

  return {
    isOpen,
    focusedIndex,
    dropdownRef,
    itemsRef,
    handleKeyDown,
    openDropdown,
    closeDropdown,
  };
}
```

### 2. Screen Reader Support

#### Code Examples:

```tsx
// ✅ Accessible notification system with ARIA live regions
function useAccessibleNotifications() {
  const [notifications, setNotifications] = useQueue<Notification>();
  const announcementRef = useRef<HTMLDivElement>(null);

  const { run: announce } = useRequest(
    (message: string, type: 'info' | 'error' | 'success' = 'info') => {
      const notification = {
        id: Date.now().toString(),
        message,
        type,
      };

      setNotifications(notification);

      // Announce to screen readers
      if (announcementRef.current) {
        announcementRef.current.textContent = `${type}: ${message}`;
      }

      // Auto-remove after 5 seconds
      setTimeout(() => {
        setNotifications(notification);
      }, 5000);
    },
    { manual: true }
  );

  return {
    announce,
    announcements: notifications,
    announcementRef,
  };
}

// Usage in component
function NotificationSystem() {
  const { announcements, announcementRef } = useAccessibleNotifications();

  return (
    <>
      {/* Invisible element for screen readers */}
      <div
        ref={announcementRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {/* Visible notifications */}
      <div className="notifications">
        {announcements.map((notification) => (
          <div
            key={notification.id}
            role="alert"
            aria-live="assertive"
            className={`notification notification--${notification.type}`}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </>
  );
}
```

### 3. Focus Management

#### Code Examples:

```tsx
// ✅ Accessible modal with focus trap
function useAccessibleModal(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openModal = useCallback(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Return focus to previous element
    previousFocusRef.current?.focus();
  }, []);

  // Trap focus within modal
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus first element when modal opens
    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  // Close on Escape
  useKeyPress('escape', closeModal);

  return {
    isOpen,
    modalRef,
    openModal,
    closeModal,
  };
}
```

### 4. Accessibility Checklist

- [ ] All interactive elements are keyboard accessible
- [ ] Provide ARIA labels and descriptions
- [ ] Use semantic HTML elements
- [ ] Ensure sufficient color contrast
- [ ] Provide text alternatives for images
- [ ] Implement proper focus management
- [ ] Support screen readers
- [ ] Test with keyboard-only navigation
- [ ] Include skip links for navigation
- [ ] Ensure responsive design works with zoom

---

## Quick Reference

### Performance Rules of Thumb

1. **Import selectively**
   ```tsx
   // ✅ Good
   import { useRequest, useAntdTable } from 'ahooks';

   // ❌ Bad
   import * as ahooks from 'ahooks';
   ```

2. **Memoize expensive operations**
   ```tsx
   // ✅ Good
   const filteredData = useMemo(() =>
     data.filter(item => item.active),
     [data]
   );
   ```

3. **Use appropriate caching**
   ```tsx
   // ✅ Good
   const { data } = useRequest(url, {
     cacheKey: 'user-data',
     staleTime: 5 * 60 * 1000, // 5 minutes
   });
   ```

### Common Patterns

1. **Debounced search**
   ```tsx
   const { run: search } = useDebouncedFn(
     (query) => searchAPI(query),
     { wait: 300 }
   );
   ```

2. **Local storage persistence**
   ```tsx
   const [settings, setSettings] = useLocalStorageState('app-settings', {
     defaultValue: { theme: 'light' },
   });
   ```

3. **Polling data**
   ```tsx
   const { data } = useRequest(url, {
     pollingInterval: 30000, // 30 seconds
   });
   ```

### Testing Checklist

```tsx
// Test structure template
describe('HookName', () => {
  // Arrange
  const mockData = {};

  it('should handle normal case', () => {
    // Act
    const { result } = renderHook(() => useHook());

    // Assert
    expect(result.current.data).toEqual(mockData);
  });

  it('should handle error case', () => {
    // Test error scenarios
  });
});
```

---

This comprehensive guide provides best practices for using ahooks effectively in production applications. Follow these patterns to build performant, maintainable, and accessible React applications.