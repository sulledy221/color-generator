import { useState } from "react";

export default function Generator({ colorCalculator }) {

  return <button onClick={colorCalculator}> Generate</button>;
}

// how can i bring the two color selectors together to generate a new color
