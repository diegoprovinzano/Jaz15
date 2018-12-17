
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/16/2018 21:21:31
-- Generated from EDMX file: C:\Users\diego\source\repos\Jaz15\Jaz15.WebApi\PartyModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO

GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Guests]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Guests];
GO
IF OBJECT_ID(N'[dbo].[Hosts]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Hosts];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Guests'
CREATE TABLE [dbo].[Guests] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [FirstName] nvarchar(max)  NOT NULL,
    [LastName] nvarchar(max)  NOT NULL,
    [NickName] nvarchar(max)  NULL,
    [Chair] int  NULL,
    [TableId] int  NOT NULL
);
GO

-- Creating table 'Hosts'
CREATE TABLE [dbo].[Hosts] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [FirstName] nvarchar(max)  NOT NULL,
    [LastName] nvarchar(max)  NOT NULL,
    [NickName] nvarchar(max)  NOT NULL,
    [TableId] int  NOT NULL
);
GO

-- Creating table 'Tables'
CREATE TABLE [dbo].[Tables] (
    [Id] int IDENTITY(1,1) NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Guests'
ALTER TABLE [dbo].[Guests]
ADD CONSTRAINT [PK_Guests]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Hosts'
ALTER TABLE [dbo].[Hosts]
ADD CONSTRAINT [PK_Hosts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Tables'
ALTER TABLE [dbo].[Tables]
ADD CONSTRAINT [PK_Tables]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [TableId] in table 'Guests'
ALTER TABLE [dbo].[Guests]
ADD CONSTRAINT [FK_TableGuest]
    FOREIGN KEY ([TableId])
    REFERENCES [dbo].[Tables]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TableGuest'
CREATE INDEX [IX_FK_TableGuest]
ON [dbo].[Guests]
    ([TableId]);
GO

-- Creating foreign key on [TableId] in table 'Hosts'
ALTER TABLE [dbo].[Hosts]
ADD CONSTRAINT [FK_TableHost]
    FOREIGN KEY ([TableId])
    REFERENCES [dbo].[Tables]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TableHost'
CREATE INDEX [IX_FK_TableHost]
ON [dbo].[Hosts]
    ([TableId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------