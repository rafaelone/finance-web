import { getProfile } from '@/https/getProfile';

async function getUserData() {
  try {
    const data = await getProfile();

    return data.user;
  } catch (err) {
    return null;
  }
}

export async function UserDetail() {
  const user = await getUserData();

  console.log(user);

  return (
    <div className="flex flex-col gap-3">
      <span className="font-firacode text-xl font-semibold text-white">
        Hi {user?.name || 'unknown'},
      </span>
      <strong className="font-firacode text-base font-semibold text-grey">
        Welcome Back
      </strong>
    </div>
  );
}
