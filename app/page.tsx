import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTotalRevenue } from "@/actions/get-total-revenue";
import { formatter } from "@/lib/utils";
import { getTotalOrders } from "@/actions/get-total-orders";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  const totalRevenue = await getTotalRevenue();
  const totalOrders = await getTotalOrders();

  return (
    <div className="mt-10 w-full">
      <Heading title="Overview" description="Overview of your store" />
      <Separator />
      <div className="grid grid-cols-2 gap-4 mt-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatter.format(totalRevenue)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
