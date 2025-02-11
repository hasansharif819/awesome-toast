import { nanoid } from "nanoid";

export type ToastOptions = {
    text: string;
    color?: string;
    backgroundColor?: string;
    duration?: number;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export class Toast {
    private static container: HTMLDivElement | null = null;

    static show(options: ToastOptions) {
        if (!Toast.container) {
            Toast.container = document.createElement("div");
            Toast.container.style.position = "fixed";
            Toast.container.style.zIndex = "9999";
            Toast.container.style.width = "max-content";
            document.body.appendChild(Toast.container);
        }

        const toast = document.createElement("div");
        const id = nanoid();
        toast.id = id;
        toast.innerText = options.text;
        toast.style.color = options.color || "#fff";
        toast.style.backgroundColor = options.backgroundColor || "#333";
        toast.style.padding = "10px 20px";
        toast.style.margin = "10px";
        toast.style.borderRadius = "5px";
        toast.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
        toast.style.transition = "opacity 0.5s ease-in-out";
        toast.style.opacity = "1";

        const { position = "top-right" } = options;
        switch (position) {
            case "top-left":
                toast.style.top = "10px";
                toast.style.left = "10px";
                break;
            case "top-right":
                toast.style.top = "10px";
                toast.style.right = "10px";
                break;
            case "bottom-left":
                toast.style.bottom = "10px";
                toast.style.left = "10px";
                break;
            case "bottom-right":
            default:
                toast.style.bottom = "10px";
                toast.style.right = "10px";
                break;
        }

        Toast.container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => Toast.container?.removeChild(toast), 500);
        }, options.duration || 3000);
    }
}
