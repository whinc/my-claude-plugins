# React Docs Plugin

**React documentation specialist with comprehensive ahooks library expertise**

## 🚀 Quick Start

### Installation

Add this marketplace to Claude Code:

```bash
/plugin marketplace add whinc/my-claude-plugins
```

Then install the plugin:

```bash
/plugin install react-docs-plugin
```

## ✨ Features

- **🎣 76+ React Hooks**: Complete ahooks library coverage with practical examples
- **📚 Comprehensive Documentation**: 9 specialized reference files covering all hook categories
- **🔧 Best Practices**: Production-ready patterns and performance optimization techniques
- **📊 State Management**: Expertise in complex state handling and data fetching
- **⚡ Performance Tools**: Optimization hooks for debounce, throttle, and memoization
- **🎯 Real Examples**: Practical usage patterns with working code samples

## 📖 Available Skills

### ahooks

A comprehensive React hooks library specialist covering **9 categories of hooks** with **76+ individual utilities**:

#### 📊 State Management (12 hooks)
Complex state handling utilities:
- `useSetState` - Object-based state management
- `useToggle` - Boolean state toggling
- `useBoolean` - Boolean state with helper methods
- `useCounter` - Numeric state with increment/decrement
- And 8 more state utilities...

#### 🔄 Lifecycle Effects (9 hooks)
Component lifecycle and effect management:
- `useMount` - Mount-only effects
- `useUnmount` - Cleanup on unmount
- `useUpdateEffect` - Skip first render
- `useDeepCompareEffect` - Deep comparison dependency
- And 5 more lifecycle hooks...

#### 🌐 Data Fetching (6 hooks)
Advanced API and data management:
- `useRequest` - Powerful request handling with caching, retry, polling
- `useFetch` - Simplified fetch wrapper
- `useAsync` - Async operation management
- And 3 more data utilities...

#### ⚡ Performance (8 hooks)
Application performance optimization:
- `useDebounce` - Debounced values and functions
- `useThrottle` - Throttled operations
- `useMemoized` - Memoized computations
- `useVirtualList` - Virtual scrolling for large lists
- And 4 more performance tools...

#### 🎨 DOM Utilities (7 hooks)
DOM interaction and browser APIs:
- `useDocumentVisibility` - Page visibility tracking
- `useDrop` - Drag and drop handling
- `useEventListener` - Event listener management
- And 4 more DOM utilities...

#### 🧠 Advanced Patterns (15+ hooks)
Sophisticated React patterns:
- `useDynamicList` - Dynamic list management
- `useNetwork` - Network status monitoring
- `useLocalStorage` - Local state persistence
- `useSessionStorage` - Session state management
- And 11+ advanced patterns...

#### 🎯 Component Utils (10+ hooks)
Component-specific utilities:
- `useHover` - Hover state management
- `useActive` - Active state tracking
- `useFocus` - Focus state handling
- And 7+ component utilities...

#### 📱 Browser APIs (8+ hooks)
Browser API integrations:
- `useGeolocation` - Location services
- `useMedia` - Media query handling
- `useInViewport` - Viewport detection
- And 5+ browser integrations...

#### 🔄 Dev & Debug (5+ hooks)
Development and debugging tools:
- `useTrackedEffect` - Effect debugging
- `useWhyDidYouUpdate` - Re-render debugging
- And 3+ dev utilities...

**Usage**:
```bash
skill: "ahooks"
```

## 💡 Common Usage Examples

### Data Fetching with Caching
```jsx
import { useRequest } from 'ahooks';

const UserProfile = ({ userId }) => {
  const { data, loading, error, refresh } = useRequest(
    `/api/users/${userId}`,
    {
      cacheKey: `user-${userId}`,
      staleTime: 60000, // 1 minute cache
      retryCount: 3
    }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data.name}</div>;
};
```

### Complex State Management
```jsx
import { useSetState, useToggle } from 'ahooks';

const useForm = (initialState) => {
  const [state, setState] = useSetState(initialState);
  const [submitting, toggleSubmitting] = useToggle(false);

  const submit = async () => {
    toggleSubmitting(true);
    try {
      await submitForm(state);
    } finally {
      toggleSubmitting(false);
    }
  };

  return { state, setState, submitting, submit };
};
```

### Performance Optimization
```jsx
import { useDebounce, useVirtualList } from 'ahooks';

const SearchResults = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredItems = useMemo(() =>
    items.filter(item =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    ), [items, debouncedSearchTerm]
  );

  const [list, containerProps] = useVirtualList(filteredItems, {
    itemHeight: 50,
    overscan: 5
  });

  return (
    <div {...containerProps}>
      {list.map(({ data: item, index }) => (
        <div key={item.id} style={{ height: 50 }}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
```

## 📚 Reference Materials

This skill includes **8 comprehensive reference files**:

- **[state-hooks.md](skills/ahooks/references/state-hooks.md)** - State management patterns
- **[effect-hooks.md](skills/ahooks/references/effect-hooks.md)** - Lifecycle and effect usage
- **[request-hooks.md](skills/ahooks/references/request-hooks.md)** - Data fetching strategies
- **[performance-hooks.md](skills/ahooks/references/performance-hooks.md)** - Optimization techniques
- **[dom-hooks.md](skills/ahooks/references/dom-hooks.md)** - DOM interaction patterns
- **[advanced-hooks.md](skills/ahooks/references/advanced-hooks.md)** - Complex hook combinations
- **[best-practices.md](skills/ahooks/references/best-practices.md)** - Production guidelines
- **[migration-guide.md](skills/ahooks/references/migration-guide.md)** - Migration from other libraries

## 🎯 Who Should Use This

- **React Developers**: Building production applications with optimized hooks
- **Teams Migrating from Class Components**: Transitioning to hooks-based patterns
- **Performance-Conscious Developers**: Optimizing React application performance
- **Code Reviewers**: Understanding best practices for hooks usage
- **Frontend Architects**: Designing scalable React component patterns

## 🤝 Contributing

This plugin covers the complete ahooks library. Contributions welcome for:
- Additional usage examples and patterns
- Performance optimization techniques
- Integration examples with popular libraries
- Advanced hook combinations and custom recipes

## 📄 License

MIT License

---

**Ready to master React hooks?** Use `skill: "ahooks"` to access comprehensive documentation, examples, and best practices for all 76+ hooks in the ahooks library.