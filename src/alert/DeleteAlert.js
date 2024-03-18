import Swal from 'sweetalert2';



export async function deleteAlert(message){
  return Swal.fire({
    title: "Confirm",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  });
}


