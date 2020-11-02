import React, { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { DebugManager, GameContainer } from "components";
import { createStore } from "store";

export default function App() {
  const store = useRef<any>();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    store.current = createStore();
    setReady(true);
  }, []);

  return ready ? (
    <Provider store={store.current}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <GameContainer />
        <DebugManager />
      </div>
    </Provider>
  ) : null;
}
