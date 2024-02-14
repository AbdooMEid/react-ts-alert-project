import { AlertTriangle, Ban, BellRing, CheckCheck, Info } from "lucide-react";
import Alert from "./components/Alert/Alert.tsx";

function App() {
  return (
    <>
      <div>
        <Alert
          type={"alert-default"}
          icon={<BellRing size={20} />}
          title={"Upgrade your plan"}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eum
          nostrum corporis dignissimos voluptate optio explicabo non laboriosam
          recusandae! Magnam?"
        />
        <Alert type={"alert-info"} icon={<Info size={20} />} title={"Note"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eum
          nostrum corporis <a href="/">laboriosam</a> dignissimos voluptate
          optio explicabo non laboriosam recusandae! Magnam?
        </Alert>
        <Alert
          type={"alert-danger"}
          icon={<Ban size={20} />}
          title={"something went wrong"}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eum
          nostrum corporis dignissimos voluptate optio explicabo non laboriosam
          recusandae! Magnam?"
        />
        <Alert
          type={"alert-success"}
          icon={<CheckCheck size={20} />}
          title={"Your order has been processed"}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eum
          nostrum corporis dignissimos voluptate optio explicabo non laboriosam
          recusandae! Magnam?"
        />
        <Alert
          type={"alert-warning"}
          icon={<AlertTriangle size={20} />}
          title={"Tips & Tricks"}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eum
          nostrum corporis dignissimos voluptate optio explicabo non laboriosam
          recusandae! Magnam?"
        />
      </div>
    </>
  );
}

export default App;
