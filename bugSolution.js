```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let intervalId;
    if(mounted){
        intervalId = setInterval(() => {
          console.log('Interval running');
        }, 1000);
    }
    return () => {
      clearInterval(intervalId);
      console.log('Component unmounted');
    };
  }, [mounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={()=> setMounted(false)}>Unmount</button>
    </div>
  );
}
```