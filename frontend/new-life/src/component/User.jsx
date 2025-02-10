import React from "react";
import "./User.css"
const User= (props) => {
	return (
		<div className="contain">
			<div className="scroll-view">
				<div className="column">
					<div className="row-view">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7afbbe9-dba2-48ce-a5e4-23dce79f2099"} 
							className="image"
						/>
						<span className="text" >
							{"USERNAME"}
						</span>
						<div className="box">
						</div>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f22b2ced-81a5-4f72-8d53-d68913429117"} 
							className="image2"
						/>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1153c50-45de-4d4c-9b0e-7ac54cb3421a"} 
							className="image3"
						/>
					</div>
					<div className="row-view2">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c2a2856-e69d-47ed-a485-9151b6dd827c"} 
							className="image4"
						/>
						<span className="text2" >
							{"Find your store"}
						</span>
						<div className="box">
						</div>
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55dc1762-8ae9-4eb1-b0ee-fa9a1e8dcbe3"} 
							className="image5"
						/>
					</div>
					<span className="text3" >
						{"Categories:"}
					</span>
					<div className="row-view3">
						<div className="view">
							<span className="text4" >
								{"FRUITS"}
							</span>
						</div>
						<span className="text5" >
							{"VEGETABLES"}
						</span>
					</div>
					<span className="text6" >
						{"POPULAR PRODUCTS:"}
					</span>
					<div className="column2">
						<div className="row-view4">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19c18cec-1216-458a-9386-2317f9098603"} 
								className="image6"
							/>
							<div className="box">
							</div>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae1f7a10-e349-45b3-ad25-ff583671b027"} 
								className="image7"
							/>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c01f1a2f-42e2-4856-8586-1629406d0127"} 
								className="image8"
							/>
						</div>
						<div className="row-view5">
							<span className="text7" >
								{"Tomato"}
							</span>
							<span className="text8" >
								{"Spinach"}
							</span>
							<span className="text4" >
								{"Mushroom"}
							</span>
						</div>
					</div>
					<span className="text9" >
						{"POPULAR COLDSTORES NEAR YOU:"}
					</span>
					<img
						src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1abe0b13-52e9-4919-8e54-2864e04915df"} 
						className="image9"
					/>
					<button className="button"
						onClick={()=>alert("Pressed!")}>
						<span className="text10" >
							{"Tap to view full map"}
						</span>
					</button>
					<div className="view2">
						<span className="text11" >
							{"Need Help? Contact us at:\nsadupayognp@gmail.com\n01-XXXXXX/01-XXXXX"}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default User;