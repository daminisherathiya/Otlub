import { useState } from "react";
import { Box } from "../../atoms/Box";
import { Stepper } from "../../atoms/Stepper";
import { Step } from "../../atoms/Step";
import { StepButton } from "../../atoms/StepButton";
import { StepLabel } from "../../atoms/StepLabel";
import { StepConnector } from "../../atoms/StepConnector";

export function Steps({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical" connector={<StepConnector className={"tw-ml-[10px]"} classes={{ line: "tw-border-white" }} />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton className="tw-text-xs" onClick={handleStep(index)}>
              <StepLabel
                classes={{ label: "tw-text-xs tw-font-semibold tw-text-white", active: "!tw-text-secondary-main", iconContainer: "tw-pr-1" }}
                StepIconProps={{
                  className: "tw-text-primary-light tw-font-semibold tw-w-5 tw-h-5",
                  classes: { active: "!tw-text-secondary-main", text: `tw-text-sm ${activeStep === index ? "tw-fill-black" : "tw-fill-white"}` },
                }}
              >
                {label}
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
