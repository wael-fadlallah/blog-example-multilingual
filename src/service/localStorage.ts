function get() {
  const userData = localStorage.getItem("userData") || "{}";
  return JSON.parse(userData);
}

function save(userData: any) {
  const data = localStorage.setItem("userData", JSON.stringify(userData));
  return data;
}

export default { get, save };
