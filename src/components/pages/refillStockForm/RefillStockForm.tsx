import Layout from "../../layout/Layout";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const RefillStockForm = () => {
  return (
    <Layout>
      <Card color="transparent" shadow={false} className="h-full w-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none text-left mb-5"
        >
          <div className="md:mb-5 flex flex-wrap  justify-between gap-8 text-left">
            <div>
              <Typography variant="h5" color="green" className="mx-2">
                Add Activity
              </Typography>
              <Typography color="blue-gray" className="mt-1 mx-2 font-normal">
                Please enter refill details
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="rounded-none">hii</CardBody>
      </Card>
    </Layout>
  );
};
export default RefillStockForm;
