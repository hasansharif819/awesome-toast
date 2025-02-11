import { nanoid } from "nanoid";
var Toast = /** @class */ (function () {
    function Toast() {
    }
    Toast.show = function (options) {
        if (!Toast.container) {
            Toast.container = document.createElement("div");
            Toast.container.style.position = "fixed";
            Toast.container.style.zIndex = "9999";
            Toast.container.style.width = "max-content";
            document.body.appendChild(Toast.container);
        }
        var toast = document.createElement("div");
        var id = nanoid();
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
        var _a = options.position, position = _a === void 0 ? "top-right" : _a;
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
        setTimeout(function () {
            toast.style.opacity = "0";
            setTimeout(function () { var _a; return (_a = Toast.container) === null || _a === void 0 ? void 0 : _a.removeChild(toast); }, 500);
        }, options.duration || 3000);
    };
    Toast.container = null;
    return Toast;
}());
export { Toast };
