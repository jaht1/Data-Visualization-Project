import { aq, op } from '@uwdata/arquero'
import {toc} from "@nebrius/indented-toc"
d3 = require("d3@latest")

data = d3.csvParse(
    await FileAttachment("global_terrorism_dataset.csv").text(),
    d3.autoType
  )

  console.log("test")
