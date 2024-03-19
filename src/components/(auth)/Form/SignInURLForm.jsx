import {useJwt} from "react-jwt";
import {useRef} from "react";
import {useLocation} from "react-router";

export default function SignInURLForm() {
  const location = useLocation();

  const {decodedToken} = useJwt(localStorage.getItem("token"));
  const inputRef = useRef();
  // const inputValue = inputRef.current.value;

  return (
    <div>
      <p className="custom-label">Sign In URL</p>
      <input type="text"
             className="custom-input"
             value={`${location.origin}/register-employee?organizationId=${decodedToken?.organizationId}`}
             readOnly="readonly"
             ref={inputRef}
      />
      {/*<CopyToClipboard text={inputValue}>*/}
      {/*  <Button className="mt-8 px-16 py-6">Copy link</Button>*/}
      {/*</CopyToClipboard>*/}
    </div>
  )
}
