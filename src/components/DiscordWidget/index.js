import React from 'react';

export default function DiscordWidget() {
  return (
    <div>
      <iframe
        src='https://discord.com/widget?id=799377008324378655&theme=dark'
        width='350'
        height='500'
        allowtransparency='true'
        frameborder='0'
        sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
      />
    </div>
  );
}
