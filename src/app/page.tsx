import ListUsers from "./ListUsers";
import ServerListUsers from "./ServerListUsers";

export default function Home() {
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <ServerListUsers />
      <ListUsers />
    </main>
  );
}
