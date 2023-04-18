import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ap-design-system',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    }
  ],
  // Tous ces fichiers permettent de créer le fichier css ap-design-system.css dans dist/ap-design-system
  globalStyle: 'src/styles/app.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/variables.scss',
        'src/styles/functions/map-deep-get.scss',
        'src/styles/utils/texts.scss',
        'src/styles/utils/spacings.scss',
        'src/styles/utils/colors.scss'
      ],
    }),
  ],
};
