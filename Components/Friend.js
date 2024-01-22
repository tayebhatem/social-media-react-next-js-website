import Avatar from "./Avatar";

export default function Friend({profileImg,fullName,mutualFriends}) {
  return (
    <div className="flex gap-2 border p-3 rounded-md">
    <Avatar url={profileImg}/>
    <div>
        <div className="font-bold text-lg">{fullName}</div>
        <div className="text-sm text-gray-600">{mutualFriends} mutual friends</div>
    </div>
    </div>
  )
}
