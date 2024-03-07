import "../Css/engage.css";

export function ItemContainer(props) {
  return (
    <div className="item">
      <hr></hr>
      <div className="engageitemcontainer">
        <input className="checkbox" type="checkbox" defaultChecked="true" />
        <div className="col-sm-6 col-md-3 col-lg-3">
          <img className="col-sm-4 itemimage" src={props.image}></img>
        </div>

        <div className="col-sm-5">
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
        </div>
        <p className="col-sm-12 col-md-2 itemtitle" id="points">
          {" "}
          2X MMRewards {props.points} Points{" "}
        </p>
      </div>
    </div>
  );
}
