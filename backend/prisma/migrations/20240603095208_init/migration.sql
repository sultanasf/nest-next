-- CreateTable
CREATE TABLE `sales` (
    `salesId` INTEGER NOT NULL AUTO_INCREMENT,
    `salesDate` DATETIME(3) NOT NULL,
    `salesAmount` DOUBLE NOT NULL,
    `productId` INTEGER NOT NULL,
    `salesPersonId` INTEGER NOT NULL,

    PRIMARY KEY (`salesId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `ProductID` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`ProductID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales_persons` (
    `salesPersonId` INTEGER NOT NULL AUTO_INCREMENT,
    `salesPersonName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`salesPersonId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `salesPersonId` INTEGER NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sales` ADD CONSTRAINT `sales_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`ProductID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sales` ADD CONSTRAINT `sales_salesPersonId_fkey` FOREIGN KEY (`salesPersonId`) REFERENCES `sales_persons`(`salesPersonId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_salesPersonId_fkey` FOREIGN KEY (`salesPersonId`) REFERENCES `sales_persons`(`salesPersonId`) ON DELETE SET NULL ON UPDATE CASCADE;
