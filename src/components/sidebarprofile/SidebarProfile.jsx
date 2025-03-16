import "./sidebarprofile.css";

export default function SidebarProfile() {
  const friends = [
    { name: "Bích Ngọc", status: "Hoạt động 13 phút trước", img: "asset/person/1.jpeg" },
    { name: "Bích Ngọc", status: "Hoạt động 4 phút trước", img: "asset/person/2.jpeg" },
    { name: "Bích Ngọc", status: "Hoạt động 4 phút trước", img: "asset/person/2.jpeg" },
    { name: "Bích Ngọc", status: "Đang hoạt động", img: "asset/person/2.jpeg", active: true },
    { name: "Bích Ngọc", status: "Đang hoạt động", img: "asset/person/2.jpeg", active: true },
    { name: "Bích Ngọc", status: "Hoạt động 13 phút trước", img: "asset/person/2.jpeg" },
  ];

  return (
    <div className="SidebarProfile">
      <div className="SidebarProfileTop">
        <h3>Giới thiệu</h3>
        <p className="SidebarProfileBio">
          Xin chào! Tôi là <strong>Quách</strong>, một người đam mê công nghệ và lập trình. Thích khám phá những điều mới mẻ và xây dựng những sản phẩm hữu ích.
        </p>
      </div>
      <div className="SidebarProfileBottom">
        <div className="friendsHeader">
          <h4>Bạn bè</h4>
          <a href="#" className="seeAllFriends">Xem tất cả bạn bè</a>
        </div>
        <div className="friendsCount">437 người bạn</div>
        <div className="friendsList">
          {friends.map((friend, index) => (
            <div key={index} className="friendItem">
              <div className="friendImageWrapper">
                <img src={friend.img} alt={friend.name} className="friendImage" />
                {friend.active && <span className="activeDot"></span>}
              </div>
              <div className="friendInfo">
                <span className="friendName">{friend.name}</span>
                <span className="friendStatus">{friend.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}