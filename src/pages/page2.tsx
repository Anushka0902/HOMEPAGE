import Page from "components/layout/Page";
import BigSection from "components/BigSection";

export default function Page2(): JSX.Element {
  return (
    <Page maxWidth={false}>
      <BigSection
        title="Example second page"
        subtitle="on a distant planet, a peculiar creature with iridescent scales and wings of shimmering light embarked on a quest to unravel the mysteries of the cosmic riddles. Little did it know, the answers awaited in the cosmic winds, echoing through the vastness of the galactic tapestry"
      />
    </Page>
  );
}
