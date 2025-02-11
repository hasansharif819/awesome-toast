export type ToastOptions = {
    text: string;
    color?: string;
    backgroundColor?: string;
    duration?: number;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};
export declare class Toast {
    private static container;
    static show(options: ToastOptions): void;
}
