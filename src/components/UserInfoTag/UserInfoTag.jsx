import "./UserInfoTag.css";

function UserInfoTag({label, display}) {
  return (
    <div className="userinfotag-container">
      <p className="userinfotag-title">{label}</p>
      <div className="usertaginfo-input-box">
        <p className="userinfotag-input-field">{display}</p>
      </div>
    </div>
  );
}

export default UserInfoTag;
