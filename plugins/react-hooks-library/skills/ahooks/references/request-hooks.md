# Data Fetching Hooks Reference

## useRequest - Core Data Fetching Hook

useRequest is the flagship and most comprehensive hook in ahooks, providing a complete solution for data fetching with extensive features including caching, polling, retry, error handling, and more.

### Description

useRequest is a powerful data fetching hook that provides a complete solution for managing API requests. It handles loading states, error states, data caching, polling, retries, debouncing, throttling, and many other advanced features out of the box.

### TypeScript Type Definitions

```typescript
// Core service function type
interface Service<TData, TParams extends any[]> {
  (...args: TParams): Promise<TData>;
}

// Basic options interface
interface UseRequestOptions<TData = any, TParams extends any[] = any[]> {
  // Manual trigger control
  manual?: boolean;

  // Initial data
  initialData?: TData;

  // Default parameters
  defaultParams?: TParams;

  // Preparation function before request
  onBefore?: (params: TParams) => void | Promise<void>;

  // Success callback
  onSuccess?: (data: TData, params: TParams) => void;

  // Error callback
  onError?: (error: Error, params: TParams) => void;

  // Finally callback (always executed)
  onFinally?: (params: TParams, data?: TData, error?: Error) => void;

  // Refresh dependencies - re-run request when these change
  refreshDeps?: any[];

  // Request cancellation
  cancelable?: boolean;

  // Polling configuration
  pollingInterval?: number;
  pollingWhenHidden?: boolean;

  // Retry configuration
  retryCount?: number;
  retryInterval?: number;

  // Debounce configuration
  debounceWait?: number;
  debounceLeading?: boolean;
  debounceTrailing?: boolean;
  debounceMaxWait?: number;

  // Throttle configuration
  throttleWait?: number;
  throttleLeading?: boolean;
  throttleTrailing?: boolean;

  // Cache configuration
  cacheKey?: string;
  cacheTime?: number;
  staleTime?: number;
  setCache?: (data: TData) => void;
  getCache?: () => TData | undefined;

  // Refresh on window focus
  refreshOnWindowFocus?: boolean;
  focusTimespan?: number;

  // Error handling
  errorRetryCount?: number;
  errorRetryInterval?: number;

  // Request customization
  fetchKey?: (...args: TParams) => string | number;
  fetches?: Record<string | number, UseRequestFetchState<TData, TParams>>;

  // Loading delay
  loadingDelay?: number;

  // Format response
  formatResult?: (response: any) => TData;
}

// Result interface
interface UseRequestResult<TData, TParams extends any[]> {
  // Data and states
  data?: TData;
  error?: Error;
  loading: boolean;
  params?: TParams;

  // Request control
  run: (...args: TParams) => Promise<TData>;
  runAsync: (...args: TParams) => Promise<TData>;
  refresh: () => Promise<TData>;
  refreshAsync: () => Promise<TData>;
  mutate: (data?: TData | ((oldData?: TData) => TData | undefined)) => void;

  // Cancellation
  cancel: () => void;

  // Multiple requests (when using fetchKey)
  fetches?: Record<string | number, UseRequestFetchState<TData, TParams>>;

  // Cache methods
  refreshDeps: any[];
}

// Individual request state (for multiple concurrent requests)
interface UseRequestFetchState<TData, TParams extends any[]> {
  data?: TData;
  error?: Error;
  loading: boolean;
  params?: TParams;
  cancel: () => void;
  refresh: () => void;
  mutate: (data?: TData) => void;
}

// Generic hook signature
function useRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: UseRequestOptions<TData, TParams>
): UseRequestResult<TData, TParams>;
```

### Basic Usage

```typescript
import { useRequest } from 'ahooks';

// Define your service function
async function getUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

// Component usage
function UserComponent({ userId }: { userId: string }) {
  const { data, loading, error, run } = useRequest(getUser, {
    defaultParams: [userId],
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
      <button onClick={() => run('123')}>Load User 123</button>
    </div>
  );
}
```

### Advanced Features

#### 1. Manual Trigger

```typescript
// Don't auto-run on mount
const { data, loading, run } = useRequest(getUser, {
  manual: true,
});

// Trigger request manually
const handleClick = () => {
  run('user-123');
};
```

#### 2. Caching & SWR

```typescript
const { data, loading } = useRequest(getUser, {
  cacheKey: 'user-cache-key', // Enable caching
  staleTime: 5 * 60 * 1000,   // Data stays fresh for 5 minutes
  cacheTime: 10 * 60 * 1000,  // Cache persists for 10 minutes
});

// Stale-While-Revalidate pattern:
// 1. Return cached data immediately
// 2. Fetch fresh data in background
// 3. Update UI with fresh data
```

#### 3. Polling

```typescript
// Poll every 3 seconds
const { data, loading, cancel } = useRequest(getStatus, {
  pollingInterval: 3000,
  pollingWhenHidden: false, // Stop polling when tab is hidden
});

// Manual polling control
const startPolling = () => {
  run(); // Start polling
};

const stopPolling = () => {
  cancel(); // Stop polling
};
```

#### 4. Retry Mechanism

```typescript
const { data, error } = useRequest(unstableService, {
  retryCount: 3,           // Retry 3 times on failure
  retryInterval: 1000,     // Wait 1 second between retries
  errorRetryCount: 5,      // Additional retries for network errors
  errorRetryInterval: 2000, // 2 seconds for error retries
});
```

#### 5. Debounce & Throttle

```typescript
// Debounced search
const { data, run } = useRequest(searchAPI, {
  debounceWait: 500,      // Wait 500ms after last call
  debounceLeading: false, // Don't trigger on first call
  debounceTrailing: true, // Trigger after delay
});

// Throttled API calls
const { data, run } = useRequest(updatePosition, {
  throttleWait: 100,      // Maximum once per 100ms
  throttleLeading: true,  // Trigger on first call
  throttleTrailing: true, // Trigger after interval
});

// Usage in search input
const handleSearch = (query: string) => {
  run(query); // Will be debounced
};
```

#### 6. Refresh on Window Focus

```typescript
const { data } = useRequest(getUserData, {
  refreshOnWindowFocus: true,
  focusTimespan: 5000,    // Minimum 5 seconds between refreshes
});

// Data refreshes when user returns to tab
```

#### 7. Request Preparation and Error Handling

```typescript
const { data, loading, error } = useRequest(createUser, {
  onBefore: (params) => {
    console.log('Creating user with:', params);
    // Can return a promise for async preparation
    return validateUserData(params);
  },
  onSuccess: (data, params) => {
    message.success(`User ${data.name} created successfully!`);
  },
  onError: (error, params) => {
    message.error(`Failed to create user: ${error.message}`);
  },
  onFinally: (params, data, error) => {
    console.log('Request completed', { params, data, error });
  },
});
```

#### 8. Multiple Concurrent Requests

```typescript
const { data, run, fetches } = useRequest(getUserDetails, {
  fetchKey: (userId) => userId, // Key for concurrent requests
});

// Load multiple users simultaneously
const loadMultipleUsers = async () => {
  await Promise.all([
    run('user-1'),
    run('user-2'),
    run('user-3'),
  ]);
};

// Access individual request states
const user1State = fetches?.['user-1'];
const user2State = fetches?.['user-2'];
```

#### 9. Data Mutation

```typescript
const { data, mutate } = useRequest(getUser, {
  cacheKey: 'user-123',
});

// Update data locally without refetching
const updateUserName = (newName: string) => {
  mutate((oldData) => ({
    ...oldData,
    name: newName,
  }));
};

// Replace data entirely
const replaceUser = (newUserData: User) => {
  mutate(newUserData);
};
```

### Integration Patterns

#### With UI Libraries (Ant Design)

```typescript
import { Form, Input, Button, Table, Select } from 'antd';
import { useRequest } from 'ahooks';

function UserManagement() {
  const [form] = Form.useForm();

  const { data, loading, run, refresh } = useRequest(
    (params) => fetchUsers(params),
    {
      defaultParams: [{ page: 1, pageSize: 10 }],
      refreshDeps: [form.getFieldsValue()], // Refresh when form changes
    }
  );

  const handleSubmit = (values: any) => {
    run(values);
  };

  return (
    <div>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name="search" label="Search">
          <Input placeholder="Search users..." />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select>
            <Select.Option value="active">Active</Select.Option>
            <Select.Option value="inactive">Inactive</Select.Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form>

      <Table
        dataSource={data?.list}
        loading={loading}
        pagination={{
          current: data?.page,
          pageSize: data?.pageSize,
          total: data?.total,
          onChange: (page) => run({ page }),
        }}
        columns={[
          { title: 'Name', dataIndex: 'name' },
          { title: 'Email', dataIndex: 'email' },
          { title: 'Status', dataIndex: 'status' },
        ]}
      />
    </div>
  );
}
```

#### With React Router

```typescript
import { useParams, useNavigate } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const { data, loading, error } = useRequest(getUser, {
    defaultParams: [userId],
    onError: (error) => {
      navigate('/404');
    },
  });

  // ... rest of component
}
```

### Performance Optimization

```typescript
// Optimized patterns for performance

// 1. Memoize service function
const memoizedService = useCallback(
  (id: string) => fetchUser(id),
  []
);

const { data } = useRequest(memoizedService, {
  defaultParams: [userId],
});

// 2. Use loading delay for better UX
const { data, loading } = useRequest(fetchLargeDataset, {
  loadingDelay: 200, // Show loading only after 200ms
});

// 3. Conditional requests with refreshDeps
const { data } = useRequest(fetchChartData, {
  refreshDeps: [dateRange, filters], // Only re-run when dependencies change
});

// 4. Cancel previous requests
const { run } = useRequest(searchAPI, {
  cancelable: true, // Cancel previous request when new one starts
});
```

### Error Handling Strategies

```typescript
// 1. Global error boundary integration
const { data, error } = useRequest(unstableAPI, {
  onError: (error) => {
    // Send to error tracking service
    trackError(error);

    // Show user-friendly message
    if (error.status === 401) {
      redirectToLogin();
    } else if (error.status >= 500) {
      showServerErrorNotification();
    } else {
      showGenericErrorNotification();
    }
  },
});

// 2. Fallback data strategy
const { data } = useRequest(getUserProfile, {
  initialData: defaultProfile,
  onError: (error) => {
    console.warn('Failed to load profile, using fallback');
  },
});

// 3. Retry with exponential backoff
const { data } = useRequest(flakyService, {
  retryCount: 5,
  retryInterval: (retryCount) => Math.min(1000 * 2 ** retryCount, 30000),
});
```

### Best Practices

1. **Type Safety**: Always define your data types
2. **Cache Keys**: Use descriptive cache keys
3. **Error Handling**: Implement comprehensive error handling
4. **Loading States**: Consider loading delays for better UX
5. **Memory Leaks**: Always cancel requests on unmount
6. **Performance**: Use refreshDeps wisely

---

## useAntdTable - Ant Design Table Integration

### Description

useAntdTable is a specialized hook that extends useRequest for seamless integration with Ant Design's Table component, providing built-in pagination, sorting, filtering, and form integration capabilities.

### TypeScript Type Definitions

```typescript
interface UseAntdTableOptions<TData, TParams> extends UseRequestOptions<TData, TParams> {
  // Table-specific options
  id?: string;
  form?: any; // Ant Design form instance
  formatResult?: (res: any) => TData;
  defaultType?: 'simple' | 'advance';
  defaultParams?: TParams;
  refreshDeps?: any[];
}

interface UseAntdTableResult<TData, TParams> extends UseRequestResult<TData, TParams> {
  // Table-specific properties
  tableProps: {
    dataSource: TData['list'] | TData[];
    loading: boolean;
    onChange: (
      pagination: any,
      filters?: any,
      sorter?: any,
      extra?: any,
    ) => void;
    pagination: {
      current: number;
      pageSize: number;
      total: number;
    };
  };

  // Form integration (when form is provided)
  search: {
    type: 'simple' | 'advance';
    changeType: (type: 'simple' | 'advance') => void;
    submit: (values?: any) => void;
    reset: () => void;
  };

  // Additional methods
  params: TParams;
  reset: () => void;
}

// Generic type signature
function useAntdTable<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: UseAntdTableOptions<TData, TParams>
): UseAntdTableResult<TData, TParams>;
```

### Basic Usage

```typescript
import { useAntdTable } from 'ahooks';
import { Table, Button, Space } from 'antd';

async function getTableData(params: any): Promise<{ list: any[]; total: number }> {
  const { current, pageSize, ...filters } = params;
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      page: current,
      pageSize,
      ...filters,
    }),
  });
  return response.json();
}

function UserTable() {
  const { tableProps, loading } = useAntdTable(getTableData, {
    defaultParams: [{ current: 1, pageSize: 10 }],
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
      ],
    },
  ];

  return (
    <Table
      columns={columns}
      rowKey="id"
      {...tableProps}
      loading={loading}
    />
  );
}
```

### Advanced Integration with Form

```typescript
import { Form, Input, Select, Button, Row, Col, Table } from 'antd';

function AdvancedUserTable() {
  const [form] = Form.useForm();

  const { tableProps, search } = useAntdTable(getTableData, {
    form,
    defaultParams: [
      { current: 1, pageSize: 10 },
      { status: 'active' },
    ],
    formatResult: (res) => ({
      list: res.data,
      total: res.total,
    }),
  });

  const { type, changeType, submit, reset } = search;

  return (
    <div>
      <Form form={form} layout="inline">
        <Form.Item name="name" label="Name">
          <Input placeholder="Search by name" />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select style={{ width: 120 }} allowClear>
            <Select.Option value="active">Active</Select.Option>
            <Select.Option value="inactive">Inactive</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" onClick={() => submit()}>
              Search
            </Button>
            <Button onClick={() => reset()}>
              Reset
            </Button>
            <Button onClick={() => changeType(type === 'simple' ? 'advance' : 'simple')}>
              {type === 'simple' ? 'Advanced' : 'Simple'} Search
            </Button>
          </Space>
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        rowKey="id"
        {...tableProps}
      />
    </div>
  );
}
```

---

## useFusionTable - Fusion Design Table Integration

### Description

useFusionTable is similar to useAntdTable but designed for Alibaba Fusion Design's Table component, providing the same level of integration with pagination, sorting, and filtering capabilities.

### TypeScript Type Definitions

```typescript
interface UseFusionTableOptions<TData, TParams> extends UseRequestOptions<TData, TParams> {
  // Fusion Table specific options
  id?: string;
  exportable?: boolean;
  selectable?: boolean;
  isPreview?: boolean;
  minRowHeight?: number;
  maxBodyHeight?: number;
  useVirtual?: boolean;
}

interface UseFusionTableResult<TData, TParams> {
  // Data and states
  dataSource: TData['list'] | TData[];
  loading: boolean;
  error?: Error;

  // Table configuration
  pagination: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (current: number, pageSize: number) => void;
  };

  // Control methods
  refresh: () => void;
  reset: () => void;
  search: (params: any) => void;
  export: () => void;
}
```

### Basic Usage

```typescript
import { useFusionTable } from 'ahooks';
import { Table, Button, Input } from '@alifd/next';

function FusionDataTable() {
  const { dataSource, loading, pagination, refresh } = useFusionTable(
    async (params) => {
      const response = await fetch('/api/data', {
        method: 'POST',
        body: JSON.stringify(params),
      });
      return response.json();
    },
    {
      defaultParams: { current: 1, pageSize: 20 },
      exportable: true,
    }
  );

  return (
    <div>
      <Button onClick={refresh} type="primary">
        Refresh
      </Button>

      <Table
        dataSource={dataSource}
        loading={loading}
        pagination={pagination}
      >
        <Table.Column title="Name" dataIndex="name" />
        <Table.Column title="Age" dataIndex="age" />
        <Table.Column title="Address" dataIndex="address" />
      </Table>
    </div>
  );
}
```

---

## usePagination - Standalone Pagination Hook

### Description

usePagination is a standalone hook for managing pagination state and logic. It's useful when you need pagination functionality without the full table integration.

### TypeScript Type Definitions

```typescript
interface UsePaginationOptions {
  // Default pagination state
  defaultCurrent?: number;
  defaultPageSize?: number;
  total?: number;

  // Callbacks
  onChange?: (current: number, pageSize: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
}

interface UsePaginationResult {
  // State
  current: number;
  pageSize: number;
  total: number;

  // Actions
  setCurrent: (current: number) => void;
  setPageSize: (pageSize: number) => void;
  setTotal: (total: number) => void;
  reset: () => void;

  // Computed values
  paginationProps: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize?: number) => void;
    onShowSizeChange: (current: number, size: number) => void;
  };
}

function usePagination(options?: UsePaginationOptions): UsePaginationResult;
```

### Basic Usage

```typescript
import { usePagination } from 'ahooks';
import { Pagination, Spin, List } from 'antd';

function PaginatedList() {
  const pagination = usePagination({
    defaultCurrent: 1,
    defaultPageSize: 10,
    onChange: (page, pageSize) => {
      console.log('Page changed:', { page, pageSize });
    },
  });

  const { current, pageSize } = pagination;

  // Fetch data based on pagination
  const { data, loading } = useRequest(
    () => fetchItems(current, pageSize),
    {
      refreshDeps: [current, pageSize],
    }
  );

  return (
    <div>
      <List
        dataSource={data?.list}
        loading={loading}
        renderItem={(item) => (
          <List.Item key={item.id}>
            {item.name}
          </List.Item>
        )}
      />

      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <Pagination {...pagination.paginationProps} />
      </div>
    </div>
  );
}
```

### Advanced Usage

```typescript
// Custom pagination logic
function CustomPagination() {
  const pagination = usePagination({
    defaultCurrent: 1,
    defaultPageSize: 20,
  });

  const { current, pageSize, setCurrent, setPageSize, setTotal } = pagination;

  // Update total when data changes
  const { data } = useRequest(fetchData, {
    onSuccess: (result) => {
      setTotal(result.total);
    },
  });

  // Programmatic navigation
  const goToFirstPage = () => setCurrent(1);
  const goToLastPage = () => setCurrent(Math.ceil(pagination.total / pageSize));
  const jumpToPage = (page) => {
    if (page >= 1 && page <= Math.ceil(pagination.total / pageSize)) {
      setCurrent(page);
    }
  };

  return (
    <div>
      <button onClick={goToFirstPage}>First</button>
      <button onClick={() => setCurrent(current - 1)} disabled={current === 1}>
        Previous
      </button>
      <span>Page {current}</span>
      <button onClick={() => setCurrent(current + 1)}>
        Next
      </button>
      <button onClick={goToLastPage}>Last</button>
    </div>
  );
}
```

---

## useInfiniteScroll - Infinite Scrolling Hook

### Description

useInfiniteScroll provides infinite scrolling functionality, automatically loading more data as the user scrolls. It includes loading states, error handling, and customizable thresholds.

### TypeScript Type Definitions

```typescript
interface UseInfiniteScrollOptions<TData, TParams> {
  // Target element or selector
  target?: HTMLElement | string | (() => HTMLElement);

  // Intersection Observer options
  threshold?: number | number[];
  rootMargin?: string;

  // Loading control
  isNoMore?: (data?: TData[]) => boolean;
  reloadDeps?: any[];

  // Manual control
  manual?: boolean;

  // Extended useRequest options
  onBefore?: () => void;
  onSuccess?: (data: TData[]) => void;
  onError?: (error: Error) => void;
  onFinally?: () => void;
}

interface UseInfiniteScrollResult<TData> {
  // Data and states
  data?: TData[];
  loading: boolean;
  loadingMore: boolean;
  noMore: boolean;
  error?: Error;

  // Actions
  loadMore: () => void;
  reload: () => void;
  mutate: (data?: TData[] | ((oldData?: TData[]) => TData[])) => void;

  // DOM ref for container
  ref: (node: HTMLElement) => void;
}

function useInfiniteScroll<TData, TParams extends any[]>(
  service: Service<TData[], TParams>,
  options?: UseInfiniteScrollOptions<TData, TParams>
): UseInfiniteScrollResult<TData>;
```

### Basic Usage

```typescript
import { useInfiniteScroll } from 'ahooks';

async function loadMoreNewsList(page: number): Promise<NewsItem[]> {
  const response = await fetch(`/api/news?page=${page}&limit=10`);
  const data = await response.json();
  return data.list;
}

function InfiniteNewsList() {
  const { data, loading, loadingMore, noMore, loadMore, ref } = useInfiniteScroll(
    (d) => loadMoreNewsList(d ? Math.ceil(d.length / 10) + 1 : 1),
    {
      target: document,
      isNoMore: (d) => d && d.length >= 100, // Stop after 100 items
      threshold: 100, // Load more when 100px from bottom
    }
  );

  return (
    <div ref={ref} style={{ height: '100vh', overflow: 'auto' }}>
      {data?.map((item, index) => (
        <div key={`${item.id}-${index}`} style={{ padding: 20, borderBottom: '1px solid #eee' }}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
        </div>
      ))}

      {loading && <div>Loading initial data...</div>}
      {loadingMore && <div>Loading more...</div>}
      {noMore && <div>No more data</div>}
      {error && <div>Error: {error.message}</div>}

      <button onClick={loadMore} disabled={loadingMore || noMore}>
        Load More
      </button>
    </div>
  );
}
```

### Advanced Usage

```typescript
// With custom scroll container
function InfiniteScrollInContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { data, loadingMore, loadMore, reload } = useInfiniteScroll(
    async (page) => {
      const response = await fetch(`/api/items?page=${page}`);
      return response.json();
    },
    {
      target: containerRef, // Use custom container
      threshold: 0.8, // Load when 80% scrolled
      isNoMore: (d) => d?.length >= 50,
      onFinally: () => {
        console.log('Load completed');
      },
    }
  );

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        {/* Other content */}
      </div>

      <div
        ref={containerRef}
        style={{
          width: 400,
          height: '100%',
          overflow: 'auto',
          border: '1px solid #ddd',
        }}
      >
        <div style={{ padding: 20 }}>
          <Button onClick={reload} style={{ marginBottom: 20 }}>
            Reload
          </Button>

          {data?.map((item) => (
            <Card key={item.id} style={{ marginBottom: 16 }}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </Card>
          ))}

          {loadingMore && (
            <div style={{ textAlign: 'center', padding: 20 }}>
              <Spin />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// With manual trigger
function ManualInfiniteScroll() {
  const { data, loading, loadMore, noMore } = useInfiniteScroll(
    async (page) => {
      const response = await fetch(`/api/data?page=${page}`);
      return response.json();
    },
    {
      manual: true, // Don't auto-load on scroll
      isNoMore: (d) => d?.length >= 30,
    }
  );

  useEffect(() => {
    // Load initial data
    loadMore();
  }, []);

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}

      {!loading && !noMore && (
        <Button onClick={loadMore} block>
          Load More
        </Button>
      )}

      {noMore && <div>End of content</div>}
    </div>
  );
}
```

### Performance Tips

```typescript
// 1. Virtual scrolling with infinite scroll
import { FixedSizeList as List } from 'react-window';

function VirtualizedInfiniteList() {
  const { data, ref } = useInfiniteScroll(loadData, {
    threshold: 100,
  });

  const Row = ({ index, style }) => (
    <div style={style}>
      {data[index].content}
    </div>
  );

  return (
    <div ref={ref} style={{ height: '100vh' }}>
      <List
        height={window.innerHeight}
        itemCount={data?.length || 0}
        itemSize={100}
      >
        {Row}
      </List>
    </div>
  );
}

// 2. Debounced scroll events
const { data, ref } = useInfiniteScroll(loadData, {
  threshold: 200,
  rootMargin: '200px', // Start loading earlier
});
```

---

## Conclusion

These data fetching hooks from ahooks provide a comprehensive solution for handling API requests and data management in React applications:

1. **useRequest** - The core hook with extensive features for all data fetching needs
2. **useAntdTable** - Seamless Ant Design Table integration
3. **useFusionTable** - Fusion Design Table integration
4. **usePagination** - Standalone pagination management
5. **useInfiniteScroll** - Infinite scrolling functionality

All hooks share common patterns and provide consistent APIs, making it easy to switch between them or use them together in complex applications.