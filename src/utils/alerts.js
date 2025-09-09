import Swal from "sweetalert2";

export function successLoginAlert(username, redirect, path) {
  Swal.fire({
    title: "Login successful",
    text: "Welcome, " + username,
    icon: "success",
  });

  redirect(path);
}

export function missingAuthTokenAlert() {
  Swal.fire({
    title: "Invalid access token!",
    text: "Please sign in before continuing",
    icon: "error",
  })
}

export function generalAlert(title, desc, icon) {
  Swal.fire({
    title: title,
    text: desc,
    icon: icon,
  });
}
