import "./Profile.css";

export const Profile = (profile) => {
  const email = profile.profile.profile.email;
  const imageSource = profile.profile.profile.image_source;
  // 왜 이렇게 길어진 걸까요?

  return (
    <div className="Profile">
      <img className="Profile-image" src={imageSource} alt="프로필 이미지" />
      <span className="Profile-email">{email}</span>
    </div>
  );
};
