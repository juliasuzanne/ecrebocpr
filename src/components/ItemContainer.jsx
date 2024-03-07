import "../Css/engage.css";

export function ItemContainer(props) {
  return (
    <div className="item">
      <hr></hr>
      <div className="engageitemcontainer">
        <input className="checkbox" type="checkbox" defaultChecked="true" />
        <img className="itemimage" src={props.image}></img>

        <div id="engageitemdescription">
          <p className="itemtitle" id="engagehead">
            {props.title} &nbsp;
          </p>
          <p className="itemtitle" id="price">
            {" "}
            ${props.newprice}&nbsp;
            <span className="itemtitle" id="strikethrough">
              {" "}
              ${props.oldprice}{" "}
            </span>
          </p>

          <p className="itemtitle" id="saving">
            {" "}
            Saving ${props.saving} with MMRewards!
          </p>
        </div>
        <p className="col-sm-12 itemtitle" id="points">
          {" "}
          2X MMRewards {props.points} Points{" "}
        </p>
      </div>
    </div>
  );
}
