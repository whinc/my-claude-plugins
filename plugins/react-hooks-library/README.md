# React Hooks Library Plugin

> Comprehensive documentation and guidance for popular React hooks libraries

## Overview

The React Hooks Library plugin provides comprehensive, in-context documentation for popular React hooks libraries, starting with **ahooks** - a high-quality React Hooks library with 80+ hooks for various scenarios.

This plugin helps developers quickly find and use the right hooks for their use cases without leaving their development environment.

## Features

### 🎯 Comprehensive ahooks Documentation

Get instant access to complete documentation for 80+ React hooks, organized by category:

- **State Management** (15+ hooks): `useBoolean`, `useToggle`, `useCounter`, `useMap`, `useSet`, `useDynamicList`, `useReactive`, etc.
- **Effects** (10+ hooks): `useMount`, `useUnmount`, `useUpdateEffect`, `useDebounceEffect`, `useThrottleEffect`, etc.
- **Async & Data Fetching** (5 hooks): `useRequest`, `usePagination`, `useInfiniteScroll`, `useAntdTable`, `useFusionTable`
- **DOM & UI** (20+ hooks): `useEventListener`, `useClickAway`, `useHover`, `useKeyPress`, `useDrop/useDrag`, etc.
- **Browser Storage** (3 hooks): `useLocalStorageState`, `useSessionStorageState`, `useCookieState`
- **Performance** (10+ hooks): `useMemoizedFn`, `useCreation`, `useLatest`, `useDebounce`, `useThrottle`, `useLockFn`, etc.
- **Timers** (5 hooks): `useInterval`, `useTimeout`, `useRafInterval`, `useRafTimeout`, `useCountDown`
- **Network** (2 hooks): `useNetwork`, `useWebSocket`
- **Advanced** (10+ hooks): `useControllableValue`, `useEventEmitter`, `useSelections`, etc.

### 📚 Each Hook Includes

- Complete API signature with TypeScript types
- Parameter descriptions with default values
- Return value documentation
- Usage examples
- Best practices and common patterns
- Special notes and caveats

### 🎨 Additional Resources

- Best practices guide for using React hooks
- Common patterns and recipes (form auto-save, infinite scroll, debounced search, etc.)
- Installation and setup instructions
- Links to official documentation

## Installation

### Prerequisites

- Claude Code (latest version)
- A project using React and ahooks (or planning to use it)

### Setup

1. **Install from Marketplace** (if available):
   ```bash
   # Use Claude Code's plugin manager
   # Navigate to Settings → Plugins → Browse Marketplace
   # Search for "React Hooks Library" and install
   ```

2. **Manual Installation**:
   ```bash
   # Clone or download this plugin to your Claude Code plugins directory
   cp -r react-hooks-library ~/.claude-plugins/
   ```

3. **Enable the Plugin**:
   - Open Claude Code
   - Go to Settings → Plugins
   - Enable "React Hooks Library"

## Usage

### Using the ahooks Skill

The plugin provides the `ahooks` skill that can be invoked when you need React hooks documentation:

**Trigger Phrases:**
- "how do I use useRequest with polling?"
- "show me pagination with ahooks"
- "what's the best hook for form debouncing?"
- "how to track mouse position with ahooks?"
- "implement infinite scroll with ahooks"
- "useLocalStorageState example"
- "ahooks state management hooks"
- "React hooks patterns"

**Example Conversations:**

```
User: "I need to implement a debounced search input with ahooks"

Claude: [Loads ahooks skill]
You can use useDebounce or useDebounceFn from ahooks. Here's how:

1. useDebounce - debounce a value:
   const [keyword, setKeyword] = useState('');
   const debouncedKeyword = useDebounce(keyword, { wait: 500 });
   
   useEffect(() => {
     search(debouncedKeyword);
   }, [debouncedKeyword]);

2. useDebounceFn - debounce a function:
   const { run: debouncedSearch } = useDebounceFn(
     (value) => search(value),
     { wait: 500 }
   );
   
   <input onChange={e => debouncedSearch(e.target.value)} />
```

```
User: "How do I manage pagination with ahooks?"

Claude: [Loads ahooks skill]
Use usePagination for pagination management:

const { data, pagination, loading } = usePagination(
  ({ current, pageSize }) => 
    fetchUsers({ page: current, size: pageSize }),
  {
    defaultPageSize: 10,
  }
);

// Use pagination controls
<Pagination 
  current={pagination.current}
  pageSize={pagination.pageSize}
  total={pagination.total}
  onChange={pagination.onChange}
/>
```

### Quick Reference

You can ask for specific categories:
- "Show me ahooks state management hooks"
- "What DOM hooks does ahooks provide?"
- "List ahooks performance hooks"
- "ahooks async hooks"

Or search for specific functionality:
- "ahooks hook for click outside"
- "ahooks keyboard event hook"
- "ahooks localStorage hook"
- "ahooks countdown hook"

## Skills

### ahooks

**Description:** Comprehensive documentation for ahooks - a high-quality & reliable React Hooks library with 80+ hooks for state management, effects, DOM manipulation, async operations, and more.

**Triggered by:**
- Questions about ahooks hooks
- React hooks patterns
- State management, effects, DOM, async operations
- Performance optimization with hooks
- Browser storage and network hooks

**Use cases:**
- Finding the right hook for a specific use case
- Understanding hook APIs and parameters
- Learning best practices for React hooks
- Implementing common patterns (pagination, infinite scroll, etc.)
- Optimizing React component performance

## Best Practices

### 1. Choose the Right Hook
- Use `useMemoizedFn` instead of `useCallback` for persistent functions
- Use `useCreation` for guaranteed memoization (unlike `useMemo`)
- Use `useRequest` for data fetching with built-in loading/error states
- Use `useDebounce`/`useThrottle` for expensive operations

### 2. Performance Optimization
- Use RAF-based hooks (`useRafState`, `useRafInterval`) for animations
- Use `useVirtualList` for large lists
- Use `useLockFn` to prevent race conditions

### 3. State Management
- Use `useReactive` for simple object state without `useState`
- Use `useControllableValue` for controlled/uncontrolled components
- Use `useSafeState` to prevent setState on unmounted components

### 4. Common Patterns

**Form with Auto-save:**
```tsx
const { run: saveForm } = useRequest(saveAPI, {
  manual: true,
  debounceWait: 500,
});

useDebounceEffect(() => {
  saveForm(form.getFieldsValue());
}, [form], { wait: 500 });
```

**Infinite Scroll:**
```tsx
const { data, loadMore, noMore } = useInfiniteScroll(
  (d) => fetchList({ page: d?.page + 1 || 1 }),
  {
    target: containerRef,
    isNoMore: (d) => d?.page >= d?.totalPages,
  }
);
```

**Click Outside:**
```tsx
const modalRef = useRef();
useClickAway(() => setVisible(false), modalRef);
```

## Project Structure

```
react-hooks-library/
├── plugin.json          # Plugin manifest
├── README.md           # This file
└── skills/
    └── ahooks.md       # Comprehensive ahooks documentation (1,500+ lines)
```

## Compatibility

- **Claude Code:** Version 1.0.0+
- **React:** 16.8+ (hooks support)
- **ahooks:** 3.x (documentation based on latest stable)

## Resources

### Official Documentation
- **ahooks**: https://ahooks.js.org/
- **GitHub**: https://github.com/alibaba/hooks
- **NPM**: https://www.npmjs.com/package/ahooks

### Installation (ahooks library)
```bash
npm install ahooks
# or
yarn add ahooks
# or
pnpm add ahooks
```

## Contributing

Contributions are welcome! To add documentation for additional React hooks libraries:

1. Create a new skill file in `skills/`
2. Update `plugin.json` to register the skill
3. Follow the existing documentation format
4. Include API signatures, examples, and best practices
5. Submit a pull request

### Future Additions (Planned)

- [ ] react-use documentation
- [ ] usehooks-ts documentation
- [ ] SWR documentation
- [ ] React Query (TanStack Query) documentation
- [ ] Zustand hooks documentation

## Changelog

### Version 1.0.0 (Initial Release)
- ✅ Complete ahooks documentation (80+ hooks)
- ✅ Organized by category
- ✅ TypeScript API signatures
- ✅ Usage examples
- ✅ Best practices guide
- ✅ Common patterns

## License

This plugin is provided as-is for use with Claude Code. The ahooks library documentation is based on the official ahooks documentation (MIT License).

## Support

For issues, questions, or suggestions:
- Open an issue on the plugin repository
- Consult the official ahooks documentation
- Ask Claude Code for help using trigger phrases

## Author

**Claude Code Community**

---

**Note:** This plugin provides documentation and guidance for the ahooks library. To use ahooks in your project, you need to install it separately using npm/yarn/pnpm.
