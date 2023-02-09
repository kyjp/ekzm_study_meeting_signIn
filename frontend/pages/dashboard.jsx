import Loader from "@/components/atom/Loader";
import Header from "@/components/Header";
import UserInfo from "@/components/UserInfo";
import { useQueryUser } from "@/hooks/useQueryUser";

const dashboard = () => {
  const { data: user, status } = useQueryUser()
  if (status === 'loading') return <Loader />
  if (status === 'error') return <></>
  return (
    <div>
      <Header>
        <UserInfo
          name={user.name}
        />
      </Header>
      <div className="mx-auto max-w-7xl px-6">
        dashboard
      </div>
    </div>
  );
}

export default dashboard;
