export default function ({
  store,
  redirect
}) {
  if (store.state.appAuth.appSession != null) {
    redirect("/");
  }
}
