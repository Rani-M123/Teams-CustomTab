import * as React from 'react';
import styles from './CustomTab.module.scss';
import { ICustomTabProps } from './ICustomTabProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class CustomTab extends React.Component<ICustomTabProps, {}> {
  public render(): React.ReactElement<ICustomTabProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.customTab} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
         
  <button id="sendButton">Send</button>
</div>
        </div>
      </section>
    );
  }
}
