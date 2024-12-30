const value = import.meta.env.VITE_HF_ACCESS_TOKEN;
console.log(value,import.meta.env)
export default {
    value: value || "hello",
};
