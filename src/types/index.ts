export type User = {
  userId: number;
  name: string;
  balance: number;
  telegramId: string;
  telegramPremium: boolean;
  walletAddress: string;
  avatar: string | null;
  friends: {
    userId: number;
    name: string;
    telegramId: string;
  }[];
  exchange: {
    exchangeId: number;
    name: string;
  };
  taskCategories: {
    categoryName: string;
    tasks: {
      taskId: number;
      taskName: string;
      reward: number;
      expired: boolean;
      completed: boolean;
    }[];
  }[];
  rewards: {
    accountAge: number;
    telegramPremium: number;
    invite: number;
  };
};
