// @codepen
import * as React from 'react';
import { Stack } from '../Stack';
import { mergeStyleSets, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

export class VerticalStackBasicExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const styles = mergeStyleSets({
      root: {
        background: DefaultPalette.themeTertiary
      },

      item: {
        color: DefaultPalette.white,
        background: DefaultPalette.themePrimary,
        padding: 5
      }
    });

    return (
      <Stack gap={5}>
        <span>Default vertical stack</span>
        <Stack className={styles.root}>
          <span>Item One</span>
          <span>Item Two</span>
          <span>Item Three</span>
        </Stack>

        <span>Vertical gap between items</span>
        <Stack gap={10} padding={10} className={styles.root}>
          <span>Item One</span>
          <span>Item Two</span>
          <span>Item Three</span>
        </Stack>

        <span>Item alignments</span>
        <Stack gap={5} padding={10} className={styles.root}>
          <Stack.Item align="auto" className={styles.item}>
            <span>Auto-aligned item</span>
          </Stack.Item>
          <Stack.Item align="stretch" className={styles.item}>
            <span>Stretch-aligned item</span>
          </Stack.Item>
          <Stack.Item align="baseline" className={styles.item}>
            <span>Baseline-aligned item</span>
          </Stack.Item>
          <Stack.Item align="start" className={styles.item}>
            <span>Start-aligned item</span>
          </Stack.Item>
          <Stack.Item align="center" className={styles.item}>
            <span>Center-aligned item</span>
          </Stack.Item>
          <Stack.Item align="end" className={styles.item}>
            <span>End-aligned item</span>
          </Stack.Item>
        </Stack>

        <span>Clickable vertical stack</span>
        <Stack onClick={this._onClick} padding={10} className={styles.root}>
          <span>Click inside this box</span>
        </Stack>
      </Stack>
    );
  }

  private _onClick = (): void => {
    alert('Clicked VerticalStack');
  };
}
