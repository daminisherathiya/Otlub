import { Container } from "./components/atoms/Container";
import { Header } from "./components/organisms/Header";
import { Steps } from "./components/molecules/Steps";
import { QuillRichTextEditor } from "./components/organisms/QuillRichTextEditor";
import { Button } from "./components/atoms/Button";
import { Select } from "./components/molecules/Select";
import { InputWithTitle } from "./components/molecules/InputWithTitle/InputWithTitle";
import { Box } from "./components/atoms/Box";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" className="tw-bg-primary-main">
        <Box className="tw-py-4">
          <p className="tw-text-xs tw-font-semibold">Create Single Product</p>
        </Box>
      </Container>
      <Container maxWidth="xl" className="tw-mt-8">
        <Box className="tw-grid tw-gap-6 md:tw-grid-cols-10">
          <Box className="md:tw-col-span-3 lg:tw-col-span-2">
            <Box className="tw-rounded-[20px] tw-bg-primary-main tw-p-4 tw-pe-1">
              <Steps steps={["PRODUCT INFORMATION", "SALES AND VARIANT INFORMATION", "PRODUCT FEATURES"]} />
            </Box>
          </Box>
          <Box className="md:tw-col-span-7 lg:tw-col-span-8">
            <Box className="tw-rounded-[20px] tw-bg-primary-main tw-px-4 tw-py-6 md:tw-px-7">
              <h4 className="tw-mb-6 tw-text-sm tw-font-bold">PRODUCT INFORMATION</h4>
              <InputWithTitle label="Name Of The Product" type="text" />
              <InputWithTitle label="Select Category" type="text" />
              <InputWithTitle label="Model Code" type="text" />
              <Select className="tw-mb-3 tw-w-full tw-border-[#19224F]" label="Brand" />
              <QuillRichTextEditor label="Product Description" />
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl" className="tw-mt-12 tw-bg-primary-main tw-py-6 tw-text-center sm:tw-text-end">
        <Button variant="contained" className="tw-bg-secondary-main tw-px-16 tw-py-2 tw-text-xs tw-font-semibold tw-capitalize tw-text-black">
          See Also Otlub
        </Button>
      </Container>
    </>
  );
}

export default App;
