import React from 'react';
import SlideCover from './slides/SlideCover';
import SlideUnits from './slides/SlideUnits';
import SlideLayers from './slides/SlideLayers';
import SlideGroups from './slides/SlideGroups';
import SlideIndustrialProcesses from './slides/SlideIndustrialProcesses';
import SlideTiles from './slides/SlideTiles';
import SlideBricksGallery from './slides/SlideBricksGallery';
import SlideBricksProcess from './slides/SlideBricksProcess';
import SlideSingleStat from './slides/SlideSingleStat';
import SlideReferences from './slides/SlideReferences';

export default function SlideRenderer({ slide }) {
  if (!slide) return null;

  switch (slide.type) {
    case 'cover':
      return <SlideCover slide={slide} />;
    case 'units':
      return <SlideUnits slide={slide} />;
    case 'layers':
      return <SlideLayers slide={slide} />;
    case 'groups':
      return <SlideGroups slide={slide} />;
    case 'industrial-processes':
      return <SlideIndustrialProcesses slide={slide} />;
    case 'tiles':
      return <SlideTiles slide={slide} />;
    case 'bricks-gallery':
      return <SlideBricksGallery slide={slide} />;
    case 'bricks-process':
      return <SlideBricksProcess slide={slide} />;
    case 'single-stat':
      return <SlideSingleStat slide={slide} />;
    case 'references':
      return <SlideReferences slide={slide} />;
    default:
      return <div>Diapositiva no encontrada</div>;
  }
}
