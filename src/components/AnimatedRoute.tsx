import PublicLayout from "@/layouts/PublicLayout";
import { FC } from "react";
import { Route, RouteProps } from "react-router";
import { PageSlideMotion } from "./Motion";

interface AnimatedRouteProps extends RouteProps {
  component: FC<any>;
  layout?: FC<any>;
}

const AnimatedRoute: FC<AnimatedRouteProps> = (props: AnimatedRouteProps) => {
  const { component: Component, layout: Layout } = props;

  return (
    <Route
      {...props}
      component={undefined}
      render={() => (
        <PageSlideMotion>
          {Layout ? (
            <Layout>
              <Component {...props} />
            </Layout>
          ) : (
            <Component {...props} />
          )}
        </PageSlideMotion>
      )}
    />
  );
};

export default AnimatedRoute;

AnimatedRoute.defaultProps = {
  layout: PublicLayout,
};
