import Swal from "sweetalert2";

export default async function editAlert(title) {
  return Swal.fire({
    position: "top-end",
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500
  });
}
