import React, { useState } from "react";
import { WindowContent, Tabs, Tab } from "react95";
import ShopGrid from "./components/ShopGrid";
import { 
  Page, 
  WindowWrapper,
  TabsContainer,
  ScrollContainer
} from "./styles";
import { useNavHeight } from "@/components/Root/navHeightContext";

interface ShopItem {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

const ITEMS_DATA: ShopItem[] = [
  { id: '1', name: 'Sword', image: '/sword.png', price: 100, description: 'A sharp sword' },
];

const TRAITS_DATA: ShopItem[] = [
  { id: '1', name: 'Speed', image: '/speed.png', price: 200, description: 'Increase speed' },
];

export default function ShopPageComponent() {
  const { navHeight } = useNavHeight();
  const [currentTab, setCurrentTab] = useState<string>("items");
  
  return (
    <Page $navHeight={navHeight}>
      <WindowWrapper>
        <WindowContent style={{ 
          height: 'calc(100% - 33px)', 
          padding: '8px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <TabsContainer>
            <Tabs value={currentTab} onChange={(value) => setCurrentTab(value)}>
              <Tab value="items">Items</Tab>
              <Tab value="traits">Traits</Tab>
            </Tabs>
          </TabsContainer>
          <ScrollContainer>
            <ShopGrid items={currentTab === "items" ? ITEMS_DATA : TRAITS_DATA} />
          </ScrollContainer>
        </WindowContent>
      </WindowWrapper>
    </Page>
  );
}