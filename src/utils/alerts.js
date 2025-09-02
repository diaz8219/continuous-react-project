import Swal from "sweetalert2";

export function successLoginAlert(username, redirect, path) {
  Swal.fire({
    title: "Login successful",
    text: "Welcome, " + username,
    icon: "success",
  })
  
  redirect(path);
}

export function generalAlert(title, desc, icon) {
  Swal.fire({
    title: title,
    text: desc,
    icon: icon,
  });
}
