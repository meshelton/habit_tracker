import { Root } from "react-dom/client";
import { StrictMode } from "react";

export function TestRender(root: Root) {
	root.render(
		<StrictMode>
			<ReactView />
		</StrictMode>,
	);
}

export const ReactView = () => {
	return <h4>Hello, React!</h4>;
};
