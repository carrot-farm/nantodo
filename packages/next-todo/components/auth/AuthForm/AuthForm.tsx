import AuthFormView, { AuthFormViewProps } from "./AuthFormView";

export interface AuthFormProps extends AuthFormViewProps {}

function AuthForm({
  type = "signup",
  onGoogleClick,
  onEmailSubmit,
}: AuthFormProps) {
  return (
    <AuthFormView
      type={type}
      onGoogleClick={onGoogleClick}
      onEmailSubmit={onEmailSubmit}
    />
  );
}

export default AuthForm;
