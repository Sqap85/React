import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/**
 * Material UI Accordion Bileşeni:
 * Accordion, kullanıcıların başlıklara tıklayarak içeriklerin açılmasını ve kapanmasını sağlar.
 * Bu bileşen, kullanıcıya dinamik bir içerik deneyimi sunar ve genellikle çok fazla içerik içeren sayfalarda kullanılır.
 * Buradaki örnekte, yalnızca bir accordion öğesi açıldığında diğerleri kapanacak şekilde yapılandırılmıştır.
 * Bu sayede bir öğe açıldığında, kullanıcı diğerlerinin kapanmış olduğunu görür ve odaklanmayı kolaylaştırır.
 */
function MUIAccordion() {
  // Accordion öğelerinin açılma ve kapanma durumlarını yönetmek için state kullanıyoruz.
  // 'expanded' state'i, hangi panelin açık olduğunu tutar.
  const [expanded, setExpanded] = useState(false);

  /**
   * handleChange fonksiyonu, kullanıcı bir accordion başlığına tıkladığında tetiklenir.
   * Bu fonksiyon, hangi panelin açılacağını kontrol eder.
   * Eğer 'isExpanded' true ise, yani tıklanan panel açılacaksa, 'expanded' state'ini o panelin id'siyle güncelleriz.
   * Eğer 'isExpanded' false ise, yani tıklanan panel kapanacaksa, 'expanded' state'ini false yaparız (yani hiçbir panel açık olmaz).
   * 'panel' parametresi, hangi panelin açılacağını belirtmek için kullanılır.
   */
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); // Açılan panelin id'sini veya false'ı set ediyoruz.
  };

  return (
    <div style={{ margin: "50px" }}>
      {/* Accordion: Bütün açılır/kapanır öğeleri kapsayan ana bileşendir.
          Her Accordion bileşeni, bir başlık kısmı (AccordionSummary) ve içerik kısmı (AccordionDetails) içerir. */}

      {/* Accordion 1 */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        {/* AccordionSummary: Başlık kısmıdır. Başlığa tıklanarak Accordion açılır ve kapanır.
            'expandIcon' özelliği, tıklanabilir bir ikon ekler (bu örnekte "expand more" ikonu). */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content" // Erişilebilirlik için, panel içeriklerinin tanımlandığı id
          id="panel1-header" // Başlık için benzersiz bir id
        >
          {/* Typography: Başlık metnini stilize eder. */}
          <Typography>Accordion Item 1</Typography>
        </AccordionSummary>

        {/* AccordionDetails: İçerik kısmıdır ve başlığa tıklandığında açılır. */}
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            interdum euismod nisi.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion Item 2</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            interdum euismod nisi.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 3 */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Accordion Item 3</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            interdum euismod nisi.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MUIAccordion;
