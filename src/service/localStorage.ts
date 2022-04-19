function get() {
  const userData = localStorage.getItem("userData") || "{}";
  return JSON.parse(userData);
}

function save(userData: any) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

export default { get, save };
